import { MiddlewareFn } from "type-graphql";
import { IContext } from "../context";

export const UserAuth: MiddlewareFn<IContext> = async ({ context }, next) => {
  if (!context.session?.user?.id) {
    throw new Error("Invalid request. No session user");
  }

  const user = await context.container.userService.getUser(
    context.session.user.id
  );

  if (!user) {
    throw new Error("Invalid user");
  }

  return next();
};
