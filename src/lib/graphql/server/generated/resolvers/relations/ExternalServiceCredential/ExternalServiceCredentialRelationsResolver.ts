import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ExternalService } from "../../../models/ExternalService";
import { ExternalServiceCredential } from "../../../models/ExternalServiceCredential";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalServiceCredential)
export class ExternalServiceCredentialRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ExternalService, {
    nullable: false
  })
  async externalService(@TypeGraphQL.Root() externalServiceCredential: ExternalServiceCredential, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ExternalService> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findUnique({
      where: {
        id: externalServiceCredential.id,
      },
    }).externalService({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() externalServiceCredential: ExternalServiceCredential, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).externalServiceCredential.findUnique({
      where: {
        id: externalServiceCredential.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
