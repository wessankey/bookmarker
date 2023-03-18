import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { TCollection } from "./CollectionListView";

type TCollectionCardProps = TCollection & {
  bookmarkCount: number;
  onDeleteCollection: (id: string) => void;
};

export const CollectionCard = ({
  id,
  name,
  bookmarkCount,
  onDeleteCollection,
}: TCollectionCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/collections/${id}`)}
      className="border border-grey-light pl-5 pr-3 pt-2 pb-2 rounded shadow-md
     hover:cursor-pointer hover:scale-105 hover:bg-gray-100 flex justify-between items-center"
    >
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="display-block mt-2 text-sm">{bookmarkCount} bookmarks</p>
      </div>

      <TrashIcon
        className="ml-3 h-5 w-5 hover:cursor-pointer hover:text-red"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteCollection(id);
        }}
      />
    </div>
  );
};
