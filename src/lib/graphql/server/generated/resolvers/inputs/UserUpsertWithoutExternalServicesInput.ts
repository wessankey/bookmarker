import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutExternalServicesInput } from "../inputs/UserCreateWithoutExternalServicesInput";
import { UserUpdateWithoutExternalServicesInput } from "../inputs/UserUpdateWithoutExternalServicesInput";

@TypeGraphQL.InputType("UserUpsertWithoutExternalServicesInput", {
  isAbstract: true
})
export class UserUpsertWithoutExternalServicesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutExternalServicesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutExternalServicesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutExternalServicesInput, {
    nullable: false
  })
  create!: UserCreateWithoutExternalServicesInput;
}
