import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalWhereInput } from "../inputs/UserTagInternalWhereInput";

@TypeGraphQL.InputType("UserTagInternalListRelationFilter", {
  isAbstract: true
})
export class UserTagInternalListRelationFilter {
  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  every?: UserTagInternalWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  some?: UserTagInternalWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  none?: UserTagInternalWhereInput | undefined;
}
