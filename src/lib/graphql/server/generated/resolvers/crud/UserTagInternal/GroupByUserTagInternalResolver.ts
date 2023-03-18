import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserTagInternalArgs } from "./args/GroupByUserTagInternalArgs";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { UserTagInternalGroupBy } from "../../outputs/UserTagInternalGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserTagInternal)
export class GroupByUserTagInternalResolver {
  @TypeGraphQL.Query(_returns => [UserTagInternalGroupBy], {
    nullable: false
  })
  async groupByUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserTagInternalArgs): Promise<UserTagInternalGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
