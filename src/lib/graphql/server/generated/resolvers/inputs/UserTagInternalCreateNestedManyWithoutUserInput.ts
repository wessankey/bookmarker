import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateManyUserInputEnvelope } from "../inputs/UserTagInternalCreateManyUserInputEnvelope";
import { UserTagInternalCreateOrConnectWithoutUserInput } from "../inputs/UserTagInternalCreateOrConnectWithoutUserInput";
import { UserTagInternalCreateWithoutUserInput } from "../inputs/UserTagInternalCreateWithoutUserInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class UserTagInternalCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserTagInternalCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserTagInternalCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserTagInternalCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserTagInternalCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalWhereUniqueInput], {
    nullable: true
  })
  connect?: UserTagInternalWhereUniqueInput[] | undefined;
}
