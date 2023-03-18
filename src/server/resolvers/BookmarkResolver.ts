import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { BookmarkCustom } from "../models/BookmarkCustom";
import { UserAuth } from "../middleware/UserAuth";
import { IBookmarkFilter } from "../services";
import { Bookmark } from "../../lib/graphql/server/generated/models";
import { IContext } from "../context";

@InputType()
class UpsertBookmarkInput {
  @Field({ nullable: true })
  id?: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  url: string;

  @Field((type) => [String])
  tags: string[];

  @Field({ nullable: true })
  collectionId?: string;
}

@InputType()
class BookmarkFilter implements IBookmarkFilter {
  @Field({ nullable: true })
  tag?: string;
}

@Resolver(BookmarkCustom)
export class BookmarkResolver {
  @Query(() => [BookmarkCustom])
  @UseMiddleware(UserAuth)
  async bookmarks(
    @Ctx() ctx: IContext,
    @Arg("filter") filter: BookmarkFilter
  ): Promise<BookmarkCustom[]> {
    if (!ctx.session?.user.id) throw new Error("Invalid user");

    const userBookmarks = ctx.container.bookmarkService.getUserBookmarks(
      ctx.session.user.id,
      filter
    );

    return userBookmarks;
  }

  @Mutation(() => Bookmark)
  @UseMiddleware(UserAuth)
  async upsertBookmark(
    @Ctx() ctx: IContext,
    @Arg("upsertBookmarkInput") upsertBookmarkInput: UpsertBookmarkInput
  ): Promise<Bookmark> {
    if (!ctx.session?.user.id) throw new Error("Invalid user");

    return ctx.container.bookmarkService.upsertBookmark({
      ...upsertBookmarkInput,
      userId: ctx.session.user.id,
    });
  }

  @Mutation(() => Bookmark)
  @UseMiddleware(UserAuth)
  async deleteBookmark(
    @Ctx() ctx: IContext,
    @Arg("id") id: string
  ): Promise<Bookmark> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.bookmarkService.deleteBookmark(id);
  }
}
