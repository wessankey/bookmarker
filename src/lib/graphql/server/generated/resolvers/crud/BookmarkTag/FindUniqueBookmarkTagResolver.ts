import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookmarkTagArgs } from "./args/FindUniqueBookmarkTagArgs";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookmarkTag)
export class FindUniqueBookmarkTagResolver {
  @TypeGraphQL.Query(_returns => BookmarkTag, {
    nullable: true
  })
  async bookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookmarkTagArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}