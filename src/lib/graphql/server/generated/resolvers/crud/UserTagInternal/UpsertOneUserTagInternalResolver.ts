import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserTagInternalArgs } from "./args/UpsertOneUserTagInternalArgs";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserTagInternal)
export class UpsertOneUserTagInternalResolver {
  @TypeGraphQL.Mutation(_returns => UserTagInternal, {
    nullable: false
  })
  async upsertOneUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserTagInternalArgs): Promise<UserTagInternal> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
