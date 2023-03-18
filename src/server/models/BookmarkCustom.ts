import { Field, ObjectType } from "type-graphql";
import { Tag } from "../../lib/graphql/server/generated/models";

@ObjectType()
export class BookmarkCustom {
  @Field((_type) => String)
  id!: String;

  @Field((_type) => String)
  title!: String;

  @Field((_type) => String)
  description!: String;

  @Field((_type) => String)
  url!: String;

  @Field((_type) => String)
  userId!: String;

  @Field((_type) => Date)
  createdAt!: Date;

  @Field((_type) => [Tag])
  tags: Tag[];
}
