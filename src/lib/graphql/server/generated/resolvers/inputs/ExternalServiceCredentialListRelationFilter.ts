import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialWhereInput } from "../inputs/ExternalServiceCredentialWhereInput";

@TypeGraphQL.InputType("ExternalServiceCredentialListRelationFilter", {
  isAbstract: true
})
export class ExternalServiceCredentialListRelationFilter {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereInput, {
    nullable: true
  })
  every?: ExternalServiceCredentialWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereInput, {
    nullable: true
  })
  some?: ExternalServiceCredentialWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereInput, {
    nullable: true
  })
  none?: ExternalServiceCredentialWhereInput | undefined;
}
