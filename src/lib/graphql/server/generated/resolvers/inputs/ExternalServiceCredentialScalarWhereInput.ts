import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ExternalServiceCredentialScalarWhereInput", {
  isAbstract: true
})
export class ExternalServiceCredentialScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarWhereInput], {
    nullable: true
  })
  AND?: ExternalServiceCredentialScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarWhereInput], {
    nullable: true
  })
  OR?: ExternalServiceCredentialScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarWhereInput], {
    nullable: true
  })
  NOT?: ExternalServiceCredentialScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  externalServiceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  username?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  apiToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
