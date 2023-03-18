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
import { ExternalService } from "../../lib/graphql/server/generated/models";
import { IContext } from "../context";

@InputType()
class ShareInput {
  @Field()
  bookmarkId: string;

  @Field()
  externalService: ExternalServiceType;
}

@Resolver(ExternalService)
export class ExternalServiceResolver {
  @Query(() => [ExternalService])
  async externalServices(@Ctx() ctx: IContext): Promise<ExternalService[]> {
    return ctx.container.externalServiceService.getAllExternalServices();
  }

  @Mutation(() => Boolean)
  async shareToExternalService(
    @Ctx() ctx: IContext,
    @Arg("input")
    input: ShareInput
  ) {
    if (!ctx.session?.user.id) throw new Error("Invalid user");

    return ctx.container.externalServiceService.shareBookmark(
      input.bookmarkId,
      ctx.session.user.id,
      input.externalService
    );
  }
}
