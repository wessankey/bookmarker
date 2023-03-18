import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateManyTagInputEnvelope } from "../inputs/UserTagInternalCreateManyTagInputEnvelope";
import { UserTagInternalCreateOrConnectWithoutTagInput } from "../inputs/UserTagInternalCreateOrConnectWithoutTagInput";
import { UserTagInternalCreateWithoutTagInput } from "../inputs/UserTagInternalCreateWithoutTagInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalCreateNestedManyWithoutTagInput", {
  isAbstract: true
})
export class UserTagInternalCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [UserTagInternalCreateWithoutTagInput], {
    nullable: true
  })
  create?: UserTagInternalCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: UserTagInternalCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: UserTagInternalCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalWhereUniqueInput], {
    nullable: true
  })
  connect?: UserTagInternalWhereUniqueInput[] | undefined;
}
