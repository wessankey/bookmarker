import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutUserTagInput } from "../inputs/TagCreateOrConnectWithoutUserTagInput";
import { TagCreateWithoutUserTagInput } from "../inputs/TagCreateWithoutUserTagInput";
import { TagUpdateWithoutUserTagInput } from "../inputs/TagUpdateWithoutUserTagInput";
import { TagUpsertWithoutUserTagInput } from "../inputs/TagUpsertWithoutUserTagInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutUserTagNestedInput", {
  isAbstract: true
})
export class TagUpdateOneRequiredWithoutUserTagNestedInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutUserTagInput, {
    nullable: true
  })
  create?: TagCreateWithoutUserTagInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutUserTagInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutUserTagInput | undefined;

  @TypeGraphQL.Field(_type => TagUpsertWithoutUserTagInput, {
    nullable: true
  })
  upsert?: TagUpsertWithoutUserTagInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateWithoutUserTagInput, {
    nullable: true
  })
  update?: TagUpdateWithoutUserTagInput | undefined;
}
