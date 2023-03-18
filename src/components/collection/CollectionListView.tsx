import { CollectionsQueryQuery } from "../../../gql/graphql";
import { CollectionCard } from "./CollectionCard";

export type TCollection = CollectionsQueryQuery["collections"][0];

type TCollectionViewProps = {
  collections: TCollection[];
  onDeleteCollection: (id: string) => void;
};

export const CollectionListView = ({
  collections,
  onDeleteCollection,
}: TCollectionViewProps) => {
  if (collections.length === 0) {
    return <div>No collections</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {collections.map((c) => {
        return (
          <CollectionCard
            key={c.id}
            id={c.id}
            name={c.name}
            description={c.description}
            createdAt={c.createdAt}
            public={c.public}
            bookmarkCount={c._count?.bookmarks || 0}
            onDeleteCollection={onDeleteCollection}
          />
        );
      })}
    </div>
  );
};
