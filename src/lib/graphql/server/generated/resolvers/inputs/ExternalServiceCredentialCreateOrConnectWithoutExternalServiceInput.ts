import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialCreateWithoutExternalServiceInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput", {
  isAbstract: true
})
export class ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateWithoutExternalServiceInput, {
    nullable: false
  })
  create!: ExternalServiceCredentialCreateWithoutExternalServiceInput;
}
