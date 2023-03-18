import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import "reflect-metadata";
import { CustomNextPage } from "../../../../types/CustomNextPage";
import { TagList } from "../../../components/tag/TagList";
import { TBookmark } from "../../../components/tag/types";
import { CollectionService } from "../../../server/services/CollectionService";

type TBookmarkRowProps = {
  bookmark: TBookmark;
};

// @ts-ignore
const PublicCollection: CustomNextPage = ({ bookmarks, name }) => {
  return (
    <div className="h-full">
      <Header collectionName={name} />

      <div className="mt-1 w-full flex justify-center p-5">
        <div className="w-full">
          {/* @ts-ignore */}
          {bookmarks.map((bookmark) => {
            return <BookmarkRow key={bookmark.id} bookmark={bookmark} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Header = ({ collectionName }: { collectionName: string }) => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <BookmarkSquareIcon className="h-9 w-9 stroke-primary" />
          <h2 className="text-xl font-bold text-primary tracking-wide">
            Bookmarker
          </h2>
        </div>
        <h1 className="text-3xl">{collectionName}</h1>
        <Link className="btn btn-outline btn-primary btn-sm" href="/login">
          Sign In
        </Link>
      </div>
      <p className="text-sm text-grey-dark mt-3">
        Bookmark collection created by me@westonsankey.com
      </p>
    </div>
  );
};

const BookmarkRow = ({ bookmark: { title, url, tags } }: TBookmarkRowProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer hover:bg-grey-light w-full mb-5 block"
    >
      <div
        className="flex justify-between items-center border border-grey-light pl-5 
                    pr-3 pt-2 pb-2 rounded shadow-md hover:bg-gray-100 transition-all"
      >
        <div>
          <div className="flex items-center">
            <h3 className="text-xl">{title}</h3>
            <p className="text-sm text-grey-dark ml-3">{url}</p>
          </div>

          <div className="mt-2 mb-2">
            <TagList tags={tags} />
          </div>
        </div>
      </div>
    </a>
  );
};

export async function getServerSideProps(context: any) {
  const collectionId = context.query.id;

  const prisma = new PrismaClient();
  const collectionService = new CollectionService(prisma);
  const collection = await collectionService.getCollection(collectionId);

  const bookmarks = collection.bookmarks.map((b) => ({
    id: b.id,
    title: b.title,
    url: b.url,
    tags: b.tags,
  }));

  return {
    props: { bookmarks, name: collection.name },
  };
}

export default PublicCollection;
