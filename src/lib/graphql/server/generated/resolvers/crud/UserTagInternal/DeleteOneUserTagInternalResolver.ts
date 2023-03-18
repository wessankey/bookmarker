import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserTagInternalArgs } from "./args/DeleteOneUserTagInternalArgs";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserTagInternal)
export class DeleteOneUserTagInternalResolver {
  @TypeGraphQL.Mutation(_returns => UserTagInternal, {
    nullable: true
  })
  async deleteOneUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserTagInternalArgs): Promise<UserTagInternal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
