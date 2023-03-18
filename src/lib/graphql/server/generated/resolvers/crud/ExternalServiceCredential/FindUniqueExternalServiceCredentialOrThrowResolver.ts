import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExternalServiceCredentialOrThrowArgs } from "./args/FindUniqueExternalServiceCredentialOrThrowArgs";
import { ExternalServiceCredential } from "../../../models/ExternalServiceCredential";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalServiceCredential)
export class FindUniqueExternalServiceCredentialOrThrowResolver {
  @TypeGraphQL.Query(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async getExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExternalServiceCredentialOrThrowArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
