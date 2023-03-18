import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { BookmarkCreateNestedManyWithoutUsersInput } from "../inputs/BookmarkCreateNestedManyWithoutUsersInput";
import { BookmarkTagCreateNestedManyWithoutUserInput } from "../inputs/BookmarkTagCreateNestedManyWithoutUserInput";
import { CollectionCreateNestedManyWithoutUserInput } from "../inputs/CollectionCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { UserTagInternalCreateNestedManyWithoutUserInput } from "../inputs/UserTagInternalCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutExternalServicesInput", {
  isAbstract: true
})
export class UserCreateWithoutExternalServicesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  bookmarks?: BookmarkCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  collections?: CollectionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  tags?: UserTagInternalCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagCreateNestedManyWithoutUserInput | undefined;
}
