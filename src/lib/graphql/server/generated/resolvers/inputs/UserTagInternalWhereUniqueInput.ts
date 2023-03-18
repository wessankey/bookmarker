import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalUserIdTagIdCompoundUniqueInput } from "../inputs/UserTagInternalUserIdTagIdCompoundUniqueInput";

@TypeGraphQL.InputType("UserTagInternalWhereUniqueInput", {
  isAbstract: true
})
export class UserTagInternalWhereUniqueInput {
  @TypeGraphQL.Field(_type => UserTagInternalUserIdTagIdCompoundUniqueInput, {
    nullable: true
  })
  userId_tagId?: UserTagInternalUserIdTagIdCompoundUniqueInput | undefined;
}
