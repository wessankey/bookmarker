import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateWithoutUserInput } from "../inputs/UserTagInternalCreateWithoutUserInput";
import { UserTagInternalUpdateWithoutUserInput } from "../inputs/UserTagInternalUpdateWithoutUserInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserTagInternalUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserTagInternalUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserTagInternalCreateWithoutUserInput;
}
