import { injectable } from "inversify";
import { IUserService } from ".";
import { ExternalServiceType, User } from "@prisma/client";
import { encrypt } from "../lib/encrypt";
import { PrismaService } from "./PrismaService";

@injectable()
export class UserService implements IUserService {
  private _prisma: PrismaService;

  public constructor(prisma: PrismaService) {
    this._prisma = prisma;
  }

  async getAllUsers(): Promise<User[]> {
    return this._prisma.user.findMany({ include: { externalServices: true } });
  }

  async getUser(id: string): Promise<User> {
    const user = await this._prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        externalServices: {
          include: {
            externalService: true,
          },
        },
      },
    });

    if (!user) {
      throw new Error("Invalid user");
    }

    return user;
  }

  async activateUsernameAndPasswordExternalService(
    userId: string,
    externalService: ExternalServiceType,
    username: string,
    password: string
  ): Promise<Boolean> {
    const service = await this._prisma.externalService.findUnique({
      where: {
        type: externalService,
      },
    });

    if (!service) {
      throw new Error("Invalid service");
    }

    await this._prisma.externalServiceCredential.create({
      data: {
        username,
        password: encrypt(password),
        externalServiceId: service.id,
        userId,
      },
    });

    return true;
  }

  async activateAPITokenExternalService(
    userId: string,
    externalService: ExternalServiceType,
    apiToken: string
  ): Promise<Boolean> {
    const service = await this._prisma.externalService.findUnique({
      where: {
        type: externalService,
      },
    });

    if (!service) {
      throw new Error("Invalid service");
    }

    await this._prisma.externalServiceCredential.create({
      data: {
        externalServiceId: service.id,
        userId,
        apiToken: encrypt(apiToken),
      },
    });

    return true;
  }

  async deactivateExternalService(
    userId: string,
    serviceType: ExternalServiceType
  ): Promise<Boolean> {
    const user = await this._prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        externalServices: {
          include: {
            externalService: true,
          },
        },
      },
    });

    if (!user) {
      throw new Error("Invalid user");
    }

    const serviceToDeactivate = user.externalServices.find(
      (s) => s.externalService.type === serviceType
    );

    if (!serviceToDeactivate) {
      throw new Error("Invalid service");
    }

    await this._prisma.externalServiceCredential.delete({
      where: {
        id: serviceToDeactivate.id,
      },
    });

    return true;
  }
}
