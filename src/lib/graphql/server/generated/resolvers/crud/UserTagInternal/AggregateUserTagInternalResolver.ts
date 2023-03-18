import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserTagInternalArgs } from "./args/AggregateUserTagInternalArgs";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { AggregateUserTagInternal } from "../../outputs/AggregateUserTagInternal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserTagInternal)
export class AggregateUserTagInternalResolver {
  @TypeGraphQL.Query(_returns => AggregateUserTagInternal, {
    nullable: false
  })
  async aggregateUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserTagInternalArgs): Promise<AggregateUserTagInternal> {
    return getPrismaFromContext(ctx).userTagInternal.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
