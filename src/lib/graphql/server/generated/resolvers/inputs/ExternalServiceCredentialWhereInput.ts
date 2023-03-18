import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceRelationFilter } from "../inputs/ExternalServiceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ExternalServiceCredentialWhereInput", {
  isAbstract: true
})
export class ExternalServiceCredentialWhereInput {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereInput], {
    nullable: true
  })
  AND?: ExternalServiceCredentialWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereInput], {
    nullable: true
  })
  OR?: ExternalServiceCredentialWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereInput], {
    nullable: true
  })
  NOT?: ExternalServiceCredentialWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ExternalServiceRelationFilter, {
    nullable: true
  })
  externalService?: ExternalServiceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
