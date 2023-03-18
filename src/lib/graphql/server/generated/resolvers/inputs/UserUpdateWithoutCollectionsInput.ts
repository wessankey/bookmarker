import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { BookmarkUpdateManyWithoutUserNestedInput } from "../inputs/BookmarkUpdateManyWithoutUserNestedInput";
import { ExternalServiceCredentialUpdateManyWithoutUserNestedInput } from "../inputs/ExternalServiceCredentialUpdateManyWithoutUserNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutUserNestedInput } from "../inputs/TagUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutCollectionsInput", {
  isAbstract: true
})
export class UserUpdateWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  tags?: TagUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  externalServices?: ExternalServiceCredentialUpdateManyWithoutUserNestedInput | undefined;
}
