import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalWhereInput } from "../inputs/UserTagInternalWhereInput";

@TypeGraphQL.InputType("UserTagInternalRelationFilter", {
  isAbstract: true
})
export class UserTagInternalRelationFilter {
  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  is?: UserTagInternalWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalWhereInput, {
    nullable: true
  })
  isNot?: UserTagInternalWhereInput | undefined;
}
