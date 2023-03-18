import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateWithoutTagInput } from "../inputs/UserTagInternalCreateWithoutTagInput";
import { UserTagInternalUpdateWithoutTagInput } from "../inputs/UserTagInternalUpdateWithoutTagInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalUpsertWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class UserTagInternalUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateWithoutTagInput, {
    nullable: false
  })
  update!: UserTagInternalUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateWithoutTagInput, {
    nullable: false
  })
  create!: UserTagInternalCreateWithoutTagInput;
}
