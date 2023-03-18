import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneExternalServiceCredentialArgs } from "./args/DeleteOneExternalServiceCredentialArgs";
import { ExternalServiceCredential } from "../../../models/ExternalServiceCredential";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalServiceCredential)
export class DeleteOneExternalServiceCredentialResolver {
  @TypeGraphQL.Mutation(_returns => ExternalServiceCredential, {
    nullable: true
  })
  async deleteOneExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExternalServiceCredentialArgs): Promise<ExternalServiceCredential | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
