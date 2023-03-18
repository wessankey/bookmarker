import { injectable } from "inversify";
import { ICollectionService } from ".";
import { Collection } from "@prisma/client";

import { BookmarkCustom } from "../models/BookmarkCustom";
import { PrismaService } from "./PrismaService";

@injectable()
export class CollectionService implements ICollectionService {
  private _prisma: PrismaService;

  public constructor(prisma: PrismaService) {
    this._prisma = prisma;
  }

  async getCollectionBookmarks(id: string): Promise<BookmarkCustom[]> {
    const collection = await this._prisma.collection.findUnique({
      where: {
        id,
      },
      include: {
        bookmarks: {
          include: {
            BookmarkTag: {
              include: {
                userTag: {
                  include: {
                    tag: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!collection) {
      throw new Error(`Collection with ID ${id} not found`);
    }

    return collection.bookmarks.map((l) => ({
      id: l.id,
      title: l.title,
      createdAt: l.createdAt,
      description: l.description,
      url: l.url,
      userId: l.userId,
      tags: l.BookmarkTag.map((t) => ({
        id: t.tagId,
        value: t.userTag.tag.value,
        color: t.userTag.tagColor,
      })),
    }));
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

  async getCollection(
    id: string
  ): Promise<Collection & { bookmarks: BookmarkCustom[] }> {
    const collection = await this._prisma.collection.findUnique({
      where: {
        id,
      },
      include: {
        bookmarks: {
          include: {
            BookmarkTag: {
              include: {
                userTag: {
                  include: {
                    tag: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (collection === null) {
      throw new Error(`Collection with ID ${id} not found`);
    }

    return {
      ...collection,
      bookmarks: collection.bookmarks.map((l) => ({
        id: l.id,
        title: l.title,
        createdAt: l.createdAt,
        description: l.description,
        url: l.url,
        userId: l.userId,
        tags: l.BookmarkTag.map((t) => ({
          id: t.tagId,
          value: t.userTag.tag.value,
          color: t.userTag.tagColor,
        })),
      })),
    };
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
