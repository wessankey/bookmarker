import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput";

@TypeGraphQL.InputType("ExternalServiceCredentialCreateWithoutUserInput", {
  isAbstract: true
})
export class ExternalServiceCredentialCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  apiToken?: string | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput, {
    nullable: false
  })
  externalService!: ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput;
}
