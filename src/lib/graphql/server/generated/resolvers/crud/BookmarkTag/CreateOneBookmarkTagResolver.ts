import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBookmarkTagArgs } from "./args/CreateOneBookmarkTagArgs";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookmarkTag)
export class CreateOneBookmarkTagResolver {
  @TypeGraphQL.Mutation(_returns => BookmarkTag, {
    nullable: false
  })
  async createOneBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneBookmarkTagArgs): Promise<BookmarkTag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
