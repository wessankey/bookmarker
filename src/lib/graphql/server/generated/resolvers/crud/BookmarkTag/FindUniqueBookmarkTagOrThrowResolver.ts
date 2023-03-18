import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookmarkTagOrThrowArgs } from "./args/FindUniqueBookmarkTagOrThrowArgs";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookmarkTag)
export class FindUniqueBookmarkTagOrThrowResolver {
  @TypeGraphQL.Query(_returns => BookmarkTag, {
    nullable: true
  })
  async getBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookmarkTagOrThrowArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
