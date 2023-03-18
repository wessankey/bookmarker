import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateWithoutUserInput } from "../inputs/ExternalServiceCredentialCreateWithoutUserInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ExternalServiceCredentialCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateWithoutUserInput, {
    nullable: false
  })
  create!: ExternalServiceCredentialCreateWithoutUserInput;
}
