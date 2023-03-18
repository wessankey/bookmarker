import { injectable } from "inversify";
import { ITagService, IUserTag } from ".";
import { PrismaService } from "./PrismaService";

@injectable()
export class TagService implements ITagService {
  private _prisma: PrismaService;

  public constructor(prisma: PrismaService) {
    this._prisma = prisma;
  }

  async getTags(userId: string): Promise<IUserTag[]> {
    const tags = await this._prisma.userTagInternal.findMany({
      where: {
        userId,
      },
      include: {
        tag: true,
      },
    });

    return tags.map((tag) => ({
      id: tag.tag.id,
      value: tag.tag.value,
      color: tag.tagColor,
    }));
  }

  async upsertTag({
    id,
    name,
    color,
    userId,
  }: {
    id: string | undefined;
    name: string;
    color: string;
    userId: string;
  }): Promise<IUserTag> {
    let tagId;

    const tag = await this._prisma.tag.findUnique({
      where: {
        value: name,
      },
    });

    if (!tag) {
      const createdTag = await this._prisma.tag.create({
        data: {
          value: name,
        },
      });

      tagId = createdTag.id;
    } else {
      tagId = tag.id;
    }

    const updatedUserTag = await this._prisma.userTagInternal.upsert({
      where: {
        userId_tagId: {
          tagId: id || "",
          userId: userId,
        },
      },
      create: {
        userId: userId,
        tagId,
        tagColor: color,
      },
      update: {
        tagId: tagId,
        tagColor: color,
      },
    });

    return {
      id: updatedUserTag.tagId,
      color: updatedUserTag.tagColor,
      value: name,
    };
  }

  async deleteTag(tagId: string, userId: string): Promise<Boolean> {
    await this._prisma.bookmarkTag.deleteMany({
      where: {
        tagId,
      },
    });

    await this._prisma.userTagInternal.delete({
      where: {
        userId_tagId: {
          tagId,
          userId: userId,
        },
      },
    });

    await this._prisma.tag.delete({
      where: {
        id: tagId,
      },
    });

    return true;
  }
}
