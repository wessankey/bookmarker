import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByBookmarkTagArgs } from "./args/GroupByBookmarkTagArgs";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { BookmarkTagGroupBy } from "../../outputs/BookmarkTagGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookmarkTag)
export class GroupByBookmarkTagResolver {
  @TypeGraphQL.Query(_returns => [BookmarkTagGroupBy], {
    nullable: false
  })
  async groupByBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBookmarkTagArgs): Promise<BookmarkTagGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).bookmarkTag.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
