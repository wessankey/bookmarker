import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstExternalServiceOrThrowArgs } from "./args/FindFirstExternalServiceOrThrowArgs";
import { ExternalService } from "../../../models/ExternalService";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalService)
export class FindFirstExternalServiceOrThrowResolver {
  @TypeGraphQL.Query(_returns => ExternalService, {
    nullable: true
  })
  async findFirstExternalServiceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExternalServiceOrThrowArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
