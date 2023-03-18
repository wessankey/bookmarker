import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Bookmark } from "../../../models/Bookmark";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { User } from "../../../models/User";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookmarkTag)
export class BookmarkTagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Bookmark, {
    nullable: false
  })
  async bookmark(@TypeGraphQL.Root() bookmarkTag: BookmarkTag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Bookmark> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findUnique({
      where: {
        bookmarkId_tagId: {
          bookmarkId: bookmarkTag.bookmarkId,
          tagId: bookmarkTag.tagId,
        },
      },
    }).bookmark({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() bookmarkTag: BookmarkTag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findUnique({
      where: {
        bookmarkId_tagId: {
          bookmarkId: bookmarkTag.bookmarkId,
          tagId: bookmarkTag.tagId,
        },
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => UserTagInternal, {
    nullable: false
  })
  async userTag(@TypeGraphQL.Root() bookmarkTag: BookmarkTag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<UserTagInternal> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findUnique({
      where: {
        bookmarkId_tagId: {
          bookmarkId: bookmarkTag.bookmarkId,
          tagId: bookmarkTag.tagId,
        },
      },
    }).userTag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
