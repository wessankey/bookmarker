import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateManyTagInput } from "../inputs/UserTagInternalCreateManyTagInput";

@TypeGraphQL.InputType("UserTagInternalCreateManyTagInputEnvelope", {
  isAbstract: true
})
export class UserTagInternalCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [UserTagInternalCreateManyTagInput], {
    nullable: false
  })
  data!: UserTagInternalCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
