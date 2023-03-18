import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBookmarkArgs } from "./args/UpdateOneBookmarkArgs";
import { Bookmark } from "../../../models/Bookmark";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bookmark)
export class UpdateOneBookmarkResolver {
  @TypeGraphQL.Mutation(_returns => Bookmark, {
    nullable: true
  })
  async updateOneBookmark(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneBookmarkArgs): Promise<Bookmark | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmark.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
