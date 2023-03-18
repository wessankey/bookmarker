import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialCreateWithoutExternalServiceInput";
import { ExternalServiceCredentialUpdateWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialUpdateWithoutExternalServiceInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialUpsertWithWhereUniqueWithoutExternalServiceInput", {
  isAbstract: true
})
export class ExternalServiceCredentialUpsertWithWhereUniqueWithoutExternalServiceInput {
  @TypeGraphQL.Field(_type => ExternalServiceCredentialWhereUniqueInput, {
    nullable: false
  })
  where!: ExternalServiceCredentialWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateWithoutExternalServiceInput, {
    nullable: false
  })
  update!: ExternalServiceCredentialUpdateWithoutExternalServiceInput;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateWithoutExternalServiceInput, {
    nullable: false
  })
  create!: ExternalServiceCredentialCreateWithoutExternalServiceInput;
}
