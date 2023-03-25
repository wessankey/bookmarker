import * as TypeGraphQL from "type-graphql";
import { UseMiddleware } from "type-graphql";
import {
  Bookmark,
  Collection,
} from "../../lib/graphql/server/generated/models";
import { IContext } from "../context";
import { UserAuth } from "../middleware/UserAuth";

@TypeGraphQL.Resolver((_of) => Collection)
export class CollectionRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Bookmark], {
    nullable: false,
  })
  @UseMiddleware(UserAuth)
  async bookmarks(
    @TypeGraphQL.Root() collection: Collection,
    @TypeGraphQL.Ctx() ctx: IContext
  ): Promise<Bookmark[]> {
    if (!ctx.session?.user?.id) {
      throw new Error("Invalid request. No session user");
    }

    return ctx.container.collectionService.getCollectionBookmarks(
      collection.id
    );
  }
}
