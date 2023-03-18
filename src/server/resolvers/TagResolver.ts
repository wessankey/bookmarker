import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { IContext } from "../context";
import { UserAuth } from "../middleware/UserAuth";
import { IUserTag } from "../services";

@ObjectType()
class UserTag implements IUserTag {
  @Field((_type) => String)
  id!: string;

  @Field((_type) => String)
  value!: string;

  @Field((_type) => String)
  color!: string;
}

@InputType()
class UpsertTagInput {
  @Field({ nullable: true })
  id?: string;

  @Field((_type) => String)
  name: string;

  @Field((_type) => String)
  color: string;
}

@Resolver(UserTag)
export class TagResolver {
  @Query(() => [UserTag])
  @UseMiddleware(UserAuth)
  async tags(@Ctx() ctx: IContext): Promise<IUserTag[]> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.tagService.getTags(ctx.session?.user?.id);
  }

  @Mutation(() => Boolean)
  async deleteTag(
    @Ctx() ctx: IContext,
    @Arg("id") id: string
  ): Promise<Boolean> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.tagService.deleteTag(id, ctx.session.user.id);
  }

  @Mutation(() => UserTag)
  @UseMiddleware(UserAuth)
  async upsertTag(
    @Ctx() ctx: IContext,
    @Arg("upsertTagInput") upsertTagInput: UpsertTagInput
  ): Promise<IUserTag> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.tagService.upsertTag({
      ...upsertTagInput,
      userId: ctx.session.user.id,
    });
  }
}
