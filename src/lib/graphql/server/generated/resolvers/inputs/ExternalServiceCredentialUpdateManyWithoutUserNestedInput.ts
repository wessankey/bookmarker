import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCreateManyUserInputEnvelope } from "../inputs/ExternalServiceCredentialCreateManyUserInputEnvelope";
import { ExternalServiceCredentialCreateOrConnectWithoutUserInput } from "../inputs/ExternalServiceCredentialCreateOrConnectWithoutUserInput";
import { ExternalServiceCredentialCreateWithoutUserInput } from "../inputs/ExternalServiceCredentialCreateWithoutUserInput";
import { ExternalServiceCredentialScalarWhereInput } from "../inputs/ExternalServiceCredentialScalarWhereInput";
import { ExternalServiceCredentialUpdateManyWithWhereWithoutUserInput } from "../inputs/ExternalServiceCredentialUpdateManyWithWhereWithoutUserInput";
import { ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput";
import { ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput";
import { ExternalServiceCredentialWhereUniqueInput } from "../inputs/ExternalServiceCredentialWhereUniqueInput";

@TypeGraphQL.InputType("ExternalServiceCredentialUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class ExternalServiceCredentialUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateWithoutUserInput], {
    nullable: true
  })
  create?: ExternalServiceCredentialCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ExternalServiceCredentialCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ExternalServiceCredentialUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ExternalServiceCredentialCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ExternalServiceCredentialUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ExternalServiceCredentialUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExternalServiceCredentialScalarWhereInput[] | undefined;
}
