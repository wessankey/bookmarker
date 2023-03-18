import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserTagInternalArgs } from "./args/CreateOneUserTagInternalArgs";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserTagInternal)
export class CreateOneUserTagInternalResolver {
  @TypeGraphQL.Mutation(_returns => UserTagInternal, {
    nullable: false
  })
  async createOneUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserTagInternalArgs): Promise<UserTagInternal> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
