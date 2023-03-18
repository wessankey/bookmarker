import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialUpdateWithoutUserInput } from "../inputs/ExternalServiceCredentialUpdateWithoutUserInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ExternalServiceCredentialUpdateWithoutUserInput;
}
