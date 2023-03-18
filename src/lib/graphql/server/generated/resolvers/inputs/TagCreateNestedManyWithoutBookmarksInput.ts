import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutBookmarksInput } from "../inputs/TagCreateOrConnectWithoutBookmarksInput";
import { TagCreateWithoutBookmarksInput } from "../inputs/TagCreateWithoutBookmarksInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedManyWithoutBookmarksInput", {
  isAbstract: true
})
export class TagCreateNestedManyWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutBookmarksInput], {
    nullable: true
  })
  create?: TagCreateWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutBookmarksInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;
}
