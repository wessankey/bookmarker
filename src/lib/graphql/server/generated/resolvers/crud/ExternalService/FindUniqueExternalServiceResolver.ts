import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExternalServiceArgs } from "./args/FindUniqueExternalServiceArgs";
import { ExternalService } from "../../../models/ExternalService";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalService)
export class FindUniqueExternalServiceResolver {
  @TypeGraphQL.Query(_returns => ExternalService, {
    nullable: true
  })
  async externalService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExternalServiceArgs): Promise<ExternalService | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
