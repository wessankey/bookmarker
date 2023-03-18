import { injectable } from "inversify";
import { PrismaClient } from "@prisma/client";

@injectable()
export class PrismaService extends PrismaClient {}
