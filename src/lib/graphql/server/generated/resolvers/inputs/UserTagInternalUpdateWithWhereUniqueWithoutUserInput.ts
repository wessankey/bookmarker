import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalUpdateWithoutUserInput } from "../inputs/UserTagInternalUpdateWithoutUserInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserTagInternalUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserTagInternalWhereUniqueInput, {
    nullable: false
  })
  where!: UserTagInternalWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserTagInternalUpdateWithoutUserInput;
}
