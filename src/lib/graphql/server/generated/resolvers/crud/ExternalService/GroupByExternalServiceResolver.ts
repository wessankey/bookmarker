import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByExternalServiceArgs } from "./args/GroupByExternalServiceArgs";
import { ExternalService } from "../../../models/ExternalService";
import { ExternalServiceGroupBy } from "../../outputs/ExternalServiceGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalService)
export class GroupByExternalServiceResolver {
  @TypeGraphQL.Query(_returns => [ExternalServiceGroupBy], {
    nullable: false
  })
  async groupByExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExternalServiceArgs): Promise<ExternalServiceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
