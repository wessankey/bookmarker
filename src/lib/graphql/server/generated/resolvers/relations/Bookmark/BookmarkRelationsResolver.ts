import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Bookmark } from "../../../models/Bookmark";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { Collection } from "../../../models/Collection";
import { BookmarkBookmarkTagArgs } from "./args/BookmarkBookmarkTagArgs";
import { BookmarkCollectionsArgs } from "./args/BookmarkCollectionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class BookmarkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [BookmarkTag], {
    nullable: false
  })
  async BookmarkTag(@TypeGraphQL.Root() bookmark: Bookmark, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BookmarkBookmarkTagArgs): Promise<BookmarkTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmark.findUnique({
      where: {
        id: bookmark.id,
      },
    }).BookmarkTag({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Collection], {
    nullable: false
  })
  async collections(@TypeGraphQL.Root() bookmark: Bookmark, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BookmarkCollectionsArgs): Promise<Collection[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmark.findUnique({
      where: {
        id: bookmark.id,
      },
    }).collections({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
