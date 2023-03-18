import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyExternalServiceCredentialArgs } from "./args/FindManyExternalServiceCredentialArgs";
import { ExternalServiceCredential } from "../../../models/ExternalServiceCredential";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalServiceCredential)
export class FindManyExternalServiceCredentialResolver {
  @TypeGraphQL.Query(_returns => [ExternalServiceCredential], {
    nullable: false
  })
  async externalServiceCredentials(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExternalServiceCredentialArgs): Promise<ExternalServiceCredential[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
