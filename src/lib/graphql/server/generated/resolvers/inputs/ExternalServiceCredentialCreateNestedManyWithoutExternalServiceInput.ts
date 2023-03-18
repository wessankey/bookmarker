import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateManyExternalServiceInputEnvelope } from "../inputs/ExternalServiceCredentialCreateManyExternalServiceInputEnvelope";
import { ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput";
import { ExternalServiceCredentialCreateWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialCreateWithoutExternalServiceInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialCreateNestedManyWithoutExternalServiceInput", {
  isAbstract: true
})
export class ExternalServiceCredentialCreateNestedManyWithoutExternalServiceInput {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateWithoutExternalServiceInput], {
    nullable: true
  })
  create?: ExternalServiceCredentialCreateWithoutExternalServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput], {
    nullable: true
  })
  connectOrCreate?: ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateManyExternalServiceInputEnvelope, {
    nullable: true
  })
  createMany?: ExternalServiceCredentialCreateManyExternalServiceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereUniqueInput], {
    nullable: true
  })
  connect?: ExternalServiceCredentialWhereUniqueInput[] | undefined;
}
