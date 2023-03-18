import { injectable } from "inversify";
import { IBookmarkFilter, IBookmarkService } from ".";
import { Bookmark } from "@prisma/client";
import { BookmarkCustom } from "../models/BookmarkCustom";
import { PrismaService } from "./PrismaService";

@injectable()
export class BookmarkService implements IBookmarkService {
  private _prisma: PrismaService;

  public constructor(prisma: PrismaService) {
    this._prisma = prisma;
  }

  async getUserBookmarks(
    userId: string,
    filter: IBookmarkFilter
  ): Promise<BookmarkCustom[]> {
    const bookmarks = await this._prisma.bookmark.findMany({
      where: {
        userId,
        ...(filter.collectionId && {
          collectionId: filter.collectionId,
        }),
        ...(filter.tag && {
          BookmarkTags: {
            some: {
              tag: {
                value: { equals: filter.tag },
              },
            },
          },
        }),
      },
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
    });

    const toReturn = bookmarks.map((l) => ({
      id: l.id,
      title: l.title,
      createdAt: l.createdAt,
      description: l.description,
      url: l.url,
      userId: l.userId,
      tags: l.BookmarkTag.map((t) => ({
        id: t.userTag.tagId,
        value: t.userTag.tag.value,
        color: t.userTag.tagColor,
      })),
    }));

    return toReturn;
  }

  async upsertBookmark({
    id,
    userId,
    title,
    description,
    url,
    tags,
    collectionId,
  }: {
    id?: string | undefined;
    userId: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
    collectionId?: string;
  }): Promise<Bookmark> {
    if (id) {
      return this.updateBookmark({
        id,
        userId,
        title,
        description,
        url,
        tags,
      });
    } else {
      return this.addBookmark({
        userId,
        title,
        description,
        url,
        tags,
        collectionId,
      });
    }
  }

  async updateBookmark({
    id,
    userId,
    title,
    description,
    url,
    tags,
  }: {
    id?: string | undefined;
    userId: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
  }) {
    const bookmark = await this._prisma.bookmark.findUnique({
      where: {
        id,
      },
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
    });

    if (!bookmark) {
      throw new Error(`Bookmark with ID ${id} not found`);
    }

    const userTags = await this._prisma.userTagInternal.findMany({
      include: {
        tag: true,
      },
    });

    const currentTags = bookmark.BookmarkTag.map((t) => t.userTag.tag.value);
    const addedTags = tags
      .filter((t) => !currentTags.includes(t))
      .map((t) => userTags.find((ut) => ut.tag.value === t));

    const removedTags = currentTags
      .filter((t) => !tags.includes(t))
      .map((t) => userTags.find((ut) => ut.tag.value === t))
      .filter((t) => !!t);

    const updatedBookmark = await this._prisma.bookmark.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        url,
        BookmarkTag: {
          create: addedTags.map((tag) => ({
            tagId: tag!.tag.id,
            userId,
          })),
          delete: removedTags.map((tag) => ({
            bookmarkId_tagId: {
              bookmarkId: id!,
              tagId: tag!.tag.id,
            },
          })),
        },
      },
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
    });

    return updatedBookmark;
  }

  async addBookmark({
    userId,
    title,
    description,
    url,
    tags,
    collectionId,
  }: {
    userId: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
    collectionId?: string;
  }) {
    const userTags = await this._prisma.userTagInternal.findMany({
      where: {
        tag: {
          value: { in: tags },
        },
      },
      include: {
        tag: true,
      },
    });

    const createdBookmark = await this._prisma.bookmark.create({
      data: {
        title,
        description,
        url,
        createdAt: new Date(),
        userId,
        ...(collectionId && {
          collections: {
            connect: {
              id: collectionId,
            },
          },
        }),
        BookmarkTag: {
          create: userTags.map((tag) => ({
            tagId: tag.tag.id,
            userId,
          })),
        },
      },
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
    });

    return createdBookmark;
  }

  async deleteBookmark(id: string): Promise<Bookmark> {
    await this._prisma.bookmarkTag.deleteMany({
      where: {
        bookmarkId: { equals: id },
      },
    });

    const deletedBookmark = await this._prisma.bookmark.delete({
      where: {
        id,
      },
    });

    return deletedBookmark;
  }
}
