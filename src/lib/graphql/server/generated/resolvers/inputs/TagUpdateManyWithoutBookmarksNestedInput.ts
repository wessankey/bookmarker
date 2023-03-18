import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutBookmarksInput } from "../inputs/TagCreateOrConnectWithoutBookmarksInput";
import { TagCreateWithoutBookmarksInput } from "../inputs/TagCreateWithoutBookmarksInput";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyWithWhereWithoutBookmarksInput } from "../inputs/TagUpdateManyWithWhereWithoutBookmarksInput";
import { TagUpdateWithWhereUniqueWithoutBookmarksInput } from "../inputs/TagUpdateWithWhereUniqueWithoutBookmarksInput";
import { TagUpsertWithWhereUniqueWithoutBookmarksInput } from "../inputs/TagUpsertWithWhereUniqueWithoutBookmarksInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateManyWithoutBookmarksNestedInput", {
  isAbstract: true
})
export class TagUpdateManyWithoutBookmarksNestedInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutBookmarksInput], {
    nullable: true
  })
  create?: TagCreateWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutBookmarksInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpsertWithWhereUniqueWithoutBookmarksInput], {
    nullable: true
  })
  upsert?: TagUpsertWithWhereUniqueWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  set?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  delete?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateWithWhereUniqueWithoutBookmarksInput], {
    nullable: true
  })
  update?: TagUpdateWithWhereUniqueWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateManyWithWhereWithoutBookmarksInput], {
    nullable: true
  })
  updateMany?: TagUpdateManyWithWhereWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagScalarWhereInput[] | undefined;
}
