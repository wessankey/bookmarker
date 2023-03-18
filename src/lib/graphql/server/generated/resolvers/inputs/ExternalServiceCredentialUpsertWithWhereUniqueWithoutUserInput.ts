import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateWithoutUserInput } from "../inputs/ExternalServiceCredentialCreateWithoutUserInput";
import { ExternalServiceCredentialUpdateWithoutUserInput } from "../inputs/ExternalServiceCredentialUpdateWithoutUserInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ExternalServiceCredentialUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateWithoutUserInput, {
    nullable: false
  })
  create!: ExternalServiceCredentialCreateWithoutUserInput;
}
