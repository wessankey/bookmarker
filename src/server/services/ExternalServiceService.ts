import { injectable } from "inversify";
import { IExternalServiceService } from ".";
import { ExternalService, ExternalServiceType } from "@prisma/client";
import axios from "axios";

import { PrismaService } from "./PrismaService";
import { decrypt } from "../lib/encrypt";

@injectable()
export class ExternalServiceService implements IExternalServiceService {
  private _prisma: PrismaService;

  public constructor(prisma: PrismaService) {
    this._prisma = prisma;
  }

  async getAllExternalServices(): Promise<ExternalService[]> {
    return this._prisma.externalService.findMany();
  }

  async shareBookmark(
    bookmarkId: string,
    userId: string,
    externalService: ExternalServiceType
  ) {
    switch (externalService) {
      case ExternalServiceType.INSTAPAPER:
        return this.shareBookmarkToInstapaper(bookmarkId, userId);
      case ExternalServiceType.READWISE:
        return this.shareBookmarkToReadwise(bookmarkId, userId);
      default:
        throw new Error("Invalid external service");
    }
  }

  async shareBookmarkToInstapaper(
    bookmarkId: string,
    userId: string
  ): Promise<Boolean> {
    // Get user credentials
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

    if (!user) throw new Error("User not found");

    const bookmark = await this._prisma.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });

    if (!bookmark) throw new Error("Bookmark not found");

    const serviceCredentials = user.externalServices.find(
      (svc) => svc.externalService.type === ExternalServiceType.INSTAPAPER
    );

    if (!serviceCredentials)
      throw new Error("User has not setup the Instapaper integration");

    return axios
      .post(process.env.INSTAPAPER_URL || "", null, {
        params: {
          username: serviceCredentials.username,
          password: decrypt(serviceCredentials.password || ""),
          url: bookmark.url,
        },
      })
      .then((res) => {
        console.log("SUCCESS");
        return true;
      })
      .catch((err) => {
        console.log("FAILURE", err);
        return false;
      });
  }

  async shareBookmarkToReadwise(
    bookmarkId: string,
    userId: string
  ): Promise<Boolean> {
    // Get user credentials
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

    if (!user) throw new Error("User not found");

    const bookmark = await this._prisma.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });

    if (!bookmark) throw new Error("Bookmark not found");

    const serviceCredentials = user.externalServices.find(
      (svc) => svc.externalService.type === ExternalServiceType.READWISE
    );

    if (!serviceCredentials)
      throw new Error("User has not setup the Readwise integration");

    return axios
      .post(
        process.env.READWISE_URL || "",
        {
          url: bookmark.url,
        },
        {
          headers: {
            Authorization: `Token ${decrypt(
              serviceCredentials.apiToken || ""
            )}`,
          },
        }
      )
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  }
}
