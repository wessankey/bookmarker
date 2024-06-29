import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateOrConnectWithoutBookmarksInput } from "../inputs/CollectionCreateOrConnectWithoutBookmarksInput";
import { CollectionCreateWithoutBookmarksInput } from "../inputs/CollectionCreateWithoutBookmarksInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCreateNestedManyWithoutBookmarksInput", {
  isAbstract: true
})
export class CollectionCreateNestedManyWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => [CollectionCreateWithoutBookmarksInput], {
    nullable: true
  })
  create?: CollectionCreateWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCreateOrConnectWithoutBookmarksInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput[] | undefined;
}
