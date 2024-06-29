import { Arg, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql";
import { Collection } from "../../lib/graphql/server/generated/models";
import { IContext } from "../context";

@InputType()
class RemoveBookmarkFromCollectionInput {
  @Field()
  collectionId: string;

  @Field()
  bookmarkId: string;
}

@InputType()
class AddBookmarkToCollectionInput {
  @Field()
  collectionId: string;

  @Field()
  bookmarkId: string;
}

@Resolver(Collection)
export class CustomCollectionResolver {
  @Mutation(() => Boolean)
  async addBookmarkToCollection(
    @Ctx() ctx: IContext,
    @Arg("addBookmarkToCollectionInput")
    addBookmarkToCollectionInput: AddBookmarkToCollectionInput
  ): Promise<Boolean> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.collectionService.addExistingBookmarkToCollection(
      addBookmarkToCollectionInput.collectionId,
      addBookmarkToCollectionInput.bookmarkId
    );
  }

  @Mutation(() => Boolean)
  async removeBookmarkFromCollection(
    @Ctx() ctx: IContext,
    @Arg("removeBookmarkFromCollectionInput")
    removeBookmarkFromCollectionInput: RemoveBookmarkFromCollectionInput
  ): Promise<Boolean> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.collectionService.removeBookmarkFromCollection(
      removeBookmarkFromCollectionInput.collectionId,
      removeBookmarkFromCollectionInput.bookmarkId
    );
  }
}
