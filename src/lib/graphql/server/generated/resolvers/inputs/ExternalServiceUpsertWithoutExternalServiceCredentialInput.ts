import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCreateWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceCreateWithoutExternalServiceCredentialInput";
import { ExternalServiceUpdateWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceUpdateWithoutExternalServiceCredentialInput";

@TypeGraphQL.InputType("ExternalServiceUpsertWithoutExternalServiceCredentialInput", {
  isAbstract: true
})
export class ExternalServiceUpsertWithoutExternalServiceCredentialInput {
  @TypeGraphQL.Field(_type => ExternalServiceUpdateWithoutExternalServiceCredentialInput, {
    nullable: false
  })
  update!: ExternalServiceUpdateWithoutExternalServiceCredentialInput;

  @TypeGraphQL.Field(_type => ExternalServiceCreateWithoutExternalServiceCredentialInput, {
    nullable: false
  })
  create!: ExternalServiceCreateWithoutExternalServiceCredentialInput;
}
