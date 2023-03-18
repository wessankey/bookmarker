import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserTagInternalArgs } from "./args/FindFirstUserTagInternalArgs";
import { UserTagInternal } from "../../../models/UserTagInternal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserTagInternal)
export class FindFirstUserTagInternalResolver {
  @TypeGraphQL.Query(_returns => UserTagInternal, {
    nullable: true
  })
  async findFirstUserTagInternal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserTagInternalArgs): Promise<UserTagInternal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userTagInternal.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
