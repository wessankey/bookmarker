import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalUpdateWithoutTagInput } from "../inputs/UserTagInternalUpdateWithoutTagInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalUpdateWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class UserTagInternalUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateWithoutTagInput, {
    nullable: false
  })
  data!: UserTagInternalUpdateWithoutTagInput;
}
