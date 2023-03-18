import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExternalServiceOrThrowArgs } from "./args/FindUniqueExternalServiceOrThrowArgs";
import { ExternalService } from "../../../models/ExternalService";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalService)
export class FindUniqueExternalServiceOrThrowResolver {
  @TypeGraphQL.Query(_returns => ExternalService, {
    nullable: true
  })
  async getExternalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExternalServiceOrThrowArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
