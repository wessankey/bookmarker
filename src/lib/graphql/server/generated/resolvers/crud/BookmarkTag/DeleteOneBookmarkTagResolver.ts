import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBookmarkTagArgs } from "./args/DeleteOneBookmarkTagArgs";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookmarkTag)
export class DeleteOneBookmarkTagResolver {
  @TypeGraphQL.Mutation(_returns => BookmarkTag, {
    nullable: true
  })
  async deleteOneBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneBookmarkTagArgs): Promise<BookmarkTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
