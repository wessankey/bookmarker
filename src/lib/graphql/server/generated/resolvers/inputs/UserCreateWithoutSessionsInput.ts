import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { BookmarkCreateNestedManyWithoutUserInput } from "../inputs/BookmarkCreateNestedManyWithoutUserInput";
import { CollectionCreateNestedManyWithoutUserInput } from "../inputs/CollectionCreateNestedManyWithoutUserInput";
import { ExternalServiceCredentialCreateNestedManyWithoutUserInput } from "../inputs/ExternalServiceCredentialCreateNestedManyWithoutUserInput";
import { TagCreateNestedManyWithoutUserInput } from "../inputs/TagCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {
  isAbstract: true
})
export class UserCreateWithoutSessionsInput {
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

  @TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  bookmarks?: BookmarkCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  collections?: CollectionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  tags?: TagCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  externalServices?: ExternalServiceCredentialCreateNestedManyWithoutUserInput | undefined;
}
