import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBookmarkOrThrowArgs } from "./args/FindFirstBookmarkOrThrowArgs";
import { Bookmark } from "../../../models/Bookmark";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class FindFirstBookmarkOrThrowResolver {
  @TypeGraphQL.Query(_returns => Bookmark, {
    nullable: true
  })
  async findFirstBookmarkOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBookmarkOrThrowArgs): Promise<Bookmark | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmark.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
