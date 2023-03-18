import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutExternalServicesInput } from "../inputs/UserCreateNestedOneWithoutExternalServicesInput";

@TypeGraphQL.InputType("ExternalServiceCredentialCreateWithoutExternalServiceInput", {
  isAbstract: true
})
export class ExternalServiceCredentialCreateWithoutExternalServiceInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  apiToken?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutExternalServicesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutExternalServicesInput;
}
