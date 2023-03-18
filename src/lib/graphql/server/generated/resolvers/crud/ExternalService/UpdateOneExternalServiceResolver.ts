import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneExternalServiceArgs } from "./args/UpdateOneExternalServiceArgs";
import { ExternalService } from "../../../models/ExternalService";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalService)
export class UpdateOneExternalServiceResolver {
  @TypeGraphQL.Mutation(_returns => ExternalService, {
    nullable: true
  })
  async updateOneExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneExternalServiceArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
