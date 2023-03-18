import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstExternalServiceCredentialOrThrowArgs } from "./args/FindFirstExternalServiceCredentialOrThrowArgs";
import { ExternalServiceCredential } from "../../../models/ExternalServiceCredential";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalServiceCredential)
export class FindFirstExternalServiceCredentialOrThrowResolver {
  @TypeGraphQL.Query(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async findFirstExternalServiceCredentialOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExternalServiceCredentialOrThrowArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
