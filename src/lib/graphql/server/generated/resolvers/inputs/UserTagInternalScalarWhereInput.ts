import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UserTagInternalScalarWhereInput", {
  isAbstract: true
})
export class UserTagInternalScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserTagInternalScalarWhereInput], {
    nullable: true
  })
  AND?: UserTagInternalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalScalarWhereInput], {
    nullable: true
  })
  OR?: UserTagInternalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalScalarWhereInput], {
    nullable: true
  })
  NOT?: UserTagInternalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagColor?: StringFilter | undefined;
}
