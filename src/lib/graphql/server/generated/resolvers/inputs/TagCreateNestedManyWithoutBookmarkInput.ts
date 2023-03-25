import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyBookmarkInputEnvelope } from "../inputs/TagCreateManyBookmarkInputEnvelope";
import { TagCreateOrConnectWithoutBookmarkInput } from "../inputs/TagCreateOrConnectWithoutBookmarkInput";
import { TagCreateWithoutBookmarkInput } from "../inputs/TagCreateWithoutBookmarkInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedManyWithoutBookmarkInput", {
  isAbstract: true
})
export class TagCreateNestedManyWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutBookmarkInput], {
    nullable: true
  })
  create?: TagCreateWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutBookmarkInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => TagCreateManyBookmarkInputEnvelope, {
    nullable: true
  })
  createMany?: TagCreateManyBookmarkInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;
}
