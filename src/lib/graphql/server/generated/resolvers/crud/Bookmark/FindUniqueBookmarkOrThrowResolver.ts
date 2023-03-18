import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookmarkOrThrowArgs } from "./args/FindUniqueBookmarkOrThrowArgs";
import { Bookmark } from "../../../models/Bookmark";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class FindUniqueBookmarkOrThrowResolver {
  @TypeGraphQL.Query(_returns => Bookmark, {
    nullable: true
  })
  async getBookmark(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookmarkOrThrowArgs): Promise<Bookmark | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmark.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
