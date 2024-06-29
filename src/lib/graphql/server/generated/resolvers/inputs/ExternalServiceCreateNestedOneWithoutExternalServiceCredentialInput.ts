import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput";
import { ExternalServiceCreateWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceCreateWithoutExternalServiceCredentialInput";
import { ExternalServiceWhereUniqueInput } from "../inputs/ExternalServiceWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput", {
  isAbstract: true
})
export class ExternalServiceCreateNestedOneWithoutExternalServiceCredentialInput {
  @TypeGraphQL.Field(_type => ExternalServiceCreateWithoutExternalServiceCredentialInput, {
    nullable: true
  })
  create?: ExternalServiceCreateWithoutExternalServiceCredentialInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput, {
    nullable: true
  })
  connectOrCreate?: ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceWhereUniqueInput, {
    nullable: true
  })
  connect?: ExternalServiceWhereUniqueInput | undefined;
}
