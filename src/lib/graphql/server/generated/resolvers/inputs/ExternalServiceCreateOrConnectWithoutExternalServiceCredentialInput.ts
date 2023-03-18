import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCreateWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceCreateWithoutExternalServiceCredentialInput";
import { ExternalServiceWhereUniqueInput } from "../inputs/ExternalServiceWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput", {
  isAbstract: true
})
export class ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput {
  @TypeGraphQL.Field(_type => ExternalServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCreateWithoutExternalServiceCredentialInput, {
    nullable: false
  })
  create!: ExternalServiceCreateWithoutExternalServiceCredentialInput;
}
