import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumExternalServiceAuthTypeFilter } from "../inputs/EnumExternalServiceAuthTypeFilter";
import { EnumExternalServiceTypeFilter } from "../inputs/EnumExternalServiceTypeFilter";
import { ExternalServiceCredentialListRelationFilter } from "../inputs/ExternalServiceCredentialListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ExternalServiceWhereInput", {
  isAbstract: true
})
export class ExternalServiceWhereInput {
  @TypeGraphQL.Field(_type => [ExternalServiceWhereInput], {
    nullable: true
  })
  AND?: ExternalServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceWhereInput], {
    nullable: true
  })
  OR?: ExternalServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceWhereInput], {
    nullable: true
  })
  NOT?: ExternalServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumExternalServiceTypeFilter, {
    nullable: true
  })
  type?: EnumExternalServiceTypeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumExternalServiceAuthTypeFilter, {
    nullable: true
  })
  authType?: EnumExternalServiceAuthTypeFilter | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialListRelationFilter, {
    nullable: true
  })
  ExternalServiceCredential?: ExternalServiceCredentialListRelationFilter | undefined;
}
