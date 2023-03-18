import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateManyUserInputEnvelope } from "../inputs/ExternalServiceCredentialCreateManyUserInputEnvelope";
import { ExternalServiceCredentialCreateOrConnectWithoutUserInput } from "../inputs/ExternalServiceCredentialCreateOrConnectWithoutUserInput";
import { ExternalServiceCredentialCreateWithoutUserInput } from "../inputs/ExternalServiceCredentialCreateWithoutUserInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ExternalServiceCredentialCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateWithoutUserInput], {
    nullable: true
  })
  create?: ExternalServiceCredentialCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ExternalServiceCredentialCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ExternalServiceCredentialCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereUniqueInput], {
    nullable: true
  })
  connect?: ExternalServiceCredentialWhereUniqueInput[] | undefined;
}
