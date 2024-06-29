import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCollectionsInput } from "../inputs/UserCreateNestedOneWithoutCollectionsInput";

@TypeGraphQL.InputType("CollectionCreateWithoutBookmarksInput", {
  isAbstract: true
})
export class CollectionCreateWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  public!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCollectionsInput, {
    nullable: true
  })
  User?: UserCreateNestedOneWithoutCollectionsInput | undefined;
}
