import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExternalServiceArgs } from "./args/AggregateExternalServiceArgs";
import { ExternalService } from "../../../models/ExternalService";
import { AggregateExternalService } from "../../outputs/AggregateExternalService";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalService)
export class AggregateExternalServiceResolver {
  @TypeGraphQL.Query(_returns => AggregateExternalService, {
    nullable: false
  })
  async aggregateExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExternalServiceArgs): Promise<AggregateExternalService> {
    return getPrismaFromContext(ctx).externalService.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
