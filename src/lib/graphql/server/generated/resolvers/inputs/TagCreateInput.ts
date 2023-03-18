import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateNestedManyWithoutTagInput } from "../inputs/UserTagInternalCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType("TagCreateInput", {
  isAbstract: true
})
export class TagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => UserTagInternalCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  UserTag?: UserTagInternalCreateNestedManyWithoutTagInput | undefined;
}
