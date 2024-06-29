import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateOrConnectWithoutBookmarksInput } from "../inputs/CollectionCreateOrConnectWithoutBookmarksInput";
import { CollectionCreateWithoutBookmarksInput } from "../inputs/CollectionCreateWithoutBookmarksInput";
import { CollectionScalarWhereInput } from "../inputs/CollectionScalarWhereInput";
import { CollectionUpdateManyWithWhereWithoutBookmarksInput } from "../inputs/CollectionUpdateManyWithWhereWithoutBookmarksInput";
import { CollectionUpdateWithWhereUniqueWithoutBookmarksInput } from "../inputs/CollectionUpdateWithWhereUniqueWithoutBookmarksInput";
import { CollectionUpsertWithWhereUniqueWithoutBookmarksInput } from "../inputs/CollectionUpsertWithWhereUniqueWithoutBookmarksInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpdateManyWithoutBookmarksNestedInput", {
  isAbstract: true
})
export class CollectionUpdateManyWithoutBookmarksNestedInput {
  @TypeGraphQL.Field(_type => [CollectionCreateWithoutBookmarksInput], {
    nullable: true
  })
  create?: CollectionCreateWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCreateOrConnectWithoutBookmarksInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpsertWithWhereUniqueWithoutBookmarksInput], {
    nullable: true
  })
  upsert?: CollectionUpsertWithWhereUniqueWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  set?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  delete?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpdateWithWhereUniqueWithoutBookmarksInput], {
    nullable: true
  })
  update?: CollectionUpdateWithWhereUniqueWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpdateManyWithWhereWithoutBookmarksInput], {
    nullable: true
  })
  updateMany?: CollectionUpdateManyWithWhereWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CollectionScalarWhereInput[] | undefined;
}
