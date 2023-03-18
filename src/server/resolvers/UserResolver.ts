import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { ExternalServiceType } from "../../lib/graphql/server/generated/enums";
import { User } from "../../lib/graphql/server/generated/models";
import { IContext } from "../context";

@InputType()
class ActivateAPITokenServiceInput {
  @Field()
  externalService: ExternalServiceType;

  @Field()
  apiToken: string;
}

@InputType()
class ActivateUsernameAndPasswordServiceInput {
  @Field()
  externalService: ExternalServiceType;

  @Field()
  username: string;

  @Field()
  password: string;
}

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users(@Ctx() ctx: IContext): Promise<User[]> {
    return ctx.container.userService.getAllUsers();
  }

  @Query(() => User)
  async user(@Ctx() ctx: IContext): Promise<User> {
    if (!ctx.session?.user?.email) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.userService.getUser(ctx.session.user.id);
  }

  @Mutation(() => Boolean)
  async deactivateExternalService(
    @Ctx() ctx: IContext,
    @Arg("serviceType") serviceType: ExternalServiceType
  ): Promise<Boolean> {
    if (!ctx.session?.user?.email) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.userService.deactivateExternalService(
      ctx.session.user.id,
      serviceType
    );
  }

  @Mutation(() => Boolean)
  async activateUsernameAndPasswordExternalService(
    @Ctx() ctx: IContext,
    @Arg("input")
    input: ActivateUsernameAndPasswordServiceInput
  ): Promise<Boolean> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.userService.activateUsernameAndPasswordExternalService(
      ctx.session.user.id,
      input.externalService,
      input.username,
      input.password
    );
  }

  @Mutation(() => Boolean)
  async activateAPITokenExternalService(
    @Ctx() ctx: IContext,
    @Arg("input")
    input: ActivateAPITokenServiceInput
  ): Promise<Boolean> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.userService.activateAPITokenExternalService(
      ctx.session.user.id,
      input.externalService,
      input.apiToken
    );
  }
}
