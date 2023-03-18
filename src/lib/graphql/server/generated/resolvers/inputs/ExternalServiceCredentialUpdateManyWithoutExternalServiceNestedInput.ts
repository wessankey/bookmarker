import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateManyExternalServiceInputEnvelope } from "../inputs/ExternalServiceCredentialCreateManyExternalServiceInputEnvelope";
import { ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput";
import { ExternalServiceCredentialCreateWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialCreateWithoutExternalServiceInput";
import { ExternalServiceCredentialScalarWhereInput } from "../inputs/ExternalServiceCredentialScalarWhereInput";
import { ExternalServiceCredentialUpdateManyWithWhereWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialUpdateManyWithWhereWithoutExternalServiceInput";
import { ExternalServiceCredentialUpdateWithWhereUniqueWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialUpdateWithWhereUniqueWithoutExternalServiceInput";
import { ExternalServiceCredentialUpsertWithWhereUniqueWithoutExternalServiceInput } from "../inputs/ExternalServiceCredentialUpsertWithWhereUniqueWithoutExternalServiceInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialUpdateManyWithoutExternalServiceNestedInput", {
  isAbstract: true
})
export class ExternalServiceCredentialUpdateManyWithoutExternalServiceNestedInput {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateWithoutExternalServiceInput], {
    nullable: true
  })
  create?: ExternalServiceCredentialCreateWithoutExternalServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput], {
    nullable: true
  })
  connectOrCreate?: ExternalServiceCredentialCreateOrConnectWithoutExternalServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialUpsertWithWhereUniqueWithoutExternalServiceInput], {
    nullable: true
  })
  upsert?: ExternalServiceCredentialUpsertWithWhereUniqueWithoutExternalServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateManyExternalServiceInputEnvelope, {
    nullable: true
  })
  createMany?: ExternalServiceCredentialCreateManyExternalServiceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereUniqueInput], {
    nullable: true
  })
  set?: ExternalServiceCredentialWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExternalServiceCredentialWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereUniqueInput], {
    nullable: true
  })
  delete?: ExternalServiceCredentialWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialWhereUniqueInput], {
    nullable: true
  })
  connect?: ExternalServiceCredentialWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialUpdateWithWhereUniqueWithoutExternalServiceInput], {
    nullable: true
  })
  update?: ExternalServiceCredentialUpdateWithWhereUniqueWithoutExternalServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialUpdateManyWithWhereWithoutExternalServiceInput], {
    nullable: true
  })
  updateMany?: ExternalServiceCredentialUpdateManyWithWhereWithoutExternalServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExternalServiceCredentialScalarWhereInput[] | undefined;
}
