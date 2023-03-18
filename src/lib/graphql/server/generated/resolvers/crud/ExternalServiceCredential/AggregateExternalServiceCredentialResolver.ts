import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExternalServiceCredentialArgs } from "./args/AggregateExternalServiceCredentialArgs";
import { ExternalServiceCredential } from "../../../models/ExternalServiceCredential";
import { AggregateExternalServiceCredential } from "../../outputs/AggregateExternalServiceCredential";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExternalServiceCredential)
export class AggregateExternalServiceCredentialResolver {
  @TypeGraphQL.Query(_returns => AggregateExternalServiceCredential, {
    nullable: false
  })
  async aggregateExternalServiceCredential(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExternalServiceCredentialArgs): Promise<AggregateExternalServiceCredential> {
    return getPrismaFromContext(ctx).externalServiceCredential.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
