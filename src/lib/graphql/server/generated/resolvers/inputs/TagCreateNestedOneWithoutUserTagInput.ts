import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutUserTagInput } from "../inputs/TagCreateOrConnectWithoutUserTagInput";
import { TagCreateWithoutUserTagInput } from "../inputs/TagCreateWithoutUserTagInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutUserTagInput", {
  isAbstract: true
})
export class TagCreateNestedOneWithoutUserTagInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutUserTagInput, {
    nullable: true
  })
  create?: TagCreateWithoutUserTagInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutUserTagInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutUserTagInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
