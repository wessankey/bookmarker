import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput";
import { ExternalServiceCreateWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceCreateWithoutExternalServiceCredentialInput";
import { ExternalServiceUpdateWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceUpdateWithoutExternalServiceCredentialInput";
import { ExternalServiceUpsertWithoutExternalServiceCredentialInput } from "../inputs/ExternalServiceUpsertWithoutExternalServiceCredentialInput";
import { ExternalServiceWhereUniqueInput } from "../inputs/ExternalServiceWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput", {
  isAbstract: true
})
export class ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput {
  @TypeGraphQL.Field(_type => ExternalServiceCreateWithoutExternalServiceCredentialInput, {
    nullable: true
  })
  create?: ExternalServiceCreateWithoutExternalServiceCredentialInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput, {
    nullable: true
  })
  connectOrCreate?: ExternalServiceCreateOrConnectWithoutExternalServiceCredentialInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceUpsertWithoutExternalServiceCredentialInput, {
    nullable: true
  })
  upsert?: ExternalServiceUpsertWithoutExternalServiceCredentialInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceWhereUniqueInput, {
    nullable: true
  })
  connect?: ExternalServiceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceUpdateWithoutExternalServiceCredentialInput, {
    nullable: true
  })
  update?: ExternalServiceUpdateWithoutExternalServiceCredentialInput | undefined;
}
