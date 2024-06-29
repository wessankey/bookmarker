import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ExternalService } from "../../../models/ExternalService";
import { ExternalServiceCredential } from "../../../models/ExternalServiceCredential";
import { ExternalServiceExternalServiceCredentialArgs } from "./args/ExternalServiceExternalServiceCredentialArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalService)
export class ExternalServiceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ExternalServiceCredential], {
    nullable: false
  })
  async ExternalServiceCredential(@TypeGraphQL.Root() externalService: ExternalService, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ExternalServiceExternalServiceCredentialArgs): Promise<ExternalServiceCredential[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalService.findUnique({
      where: {
        id: externalService.id,
      },
    }).ExternalServiceCredential({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
