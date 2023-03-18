import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBookmarkTagArgs } from "./args/AggregateBookmarkTagArgs";
import { BookmarkTag } from "../../../models/BookmarkTag";
import { AggregateBookmarkTag } from "../../outputs/AggregateBookmarkTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookmarkTag)
export class AggregateBookmarkTagResolver {
  @TypeGraphQL.Query(_returns => AggregateBookmarkTag, {
    nullable: false
  })
  async aggregateBookmarkTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookmarkTagArgs): Promise<AggregateBookmarkTag> {
    return getPrismaFromContext(ctx).bookmarkTag.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
