import { injectable } from "inversify";
import { ICollectionService } from ".";
import { Collection } from "../../lib/graphql/server/generated";
import { PrismaService } from "./PrismaService";

@injectable()
export class CollectionService implements ICollectionService {
  private _prisma: PrismaService;

  public constructor(prisma: PrismaService) {
    this._prisma = prisma;
  }

  async createCollection({
    name,
    description,
    isPublic,
    createdAt,
    userId,
  }: {
    name: string;
    description: string;
    isPublic: boolean;
    createdAt: string;
    userId: string;
  }): Promise<Collection> {
    const collection = await this._prisma.collection.create({
      data: {
        name,
        description,
        public: isPublic,
        createdAt: createdAt,
        userId: userId,
      },
    });

    return collection;
  }

  async getUserCollections(userId: string): Promise<Collection[]> {
    return await this._prisma.collection.findMany({ where: { userId } });
  }

  async getCollection(id: string): Promise<Collection> {
    const collection = await this._prisma.collection.findUnique({
      where: {
        id,
      },
      include: {
        bookmarks: {
          include: {
            tags: true,
          },
        },
      },
    });

    if (collection === null) {
      throw new Error(`Collection with ID ${id} not found`);
    }

    return collection;
  }

  async addExistingBookmarkToCollection(
    collectionId: string,
    bookmarkId: string
  ): Promise<Boolean> {
    await this._prisma.collection.update({
      where: {
        id: collectionId,
      },
      data: {
        bookmarks: {
          connect: {
            id: bookmarkId,
          },
        },
      },
    });

    return true;
  }

  async removeBookmarkFromCollection(
    collectionId: string,
    bookmarkId: string
  ): Promise<Boolean> {
    await this._prisma.collection.update({
      where: {
        id: collectionId,
      },
      data: {
        bookmarks: {
          disconnect: {
            id: bookmarkId,
          },
        },
      },
    });

    return true;
  }
}
