import { CustomNextPage } from "../../../types/CustomNextPage";
import { BookmarkTable } from "../../components/bookmark/BookmarkTable";
import { UpsertBookmarkModal } from "../../components/bookmark/UpsertBookmarkModal";
import { EmptyState } from "../../components/common/EmptyState";
import Layout from "../../components/layout/Layout";
import { useCollection } from "../../hooks/useCollection";
import { ClipboardDocumentIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Spinner } from "../../components/common/Spinner";
import { useRouter } from "next/router";

type THeaderProps = {
  id: string;
  collectionName: string;
  isPublic: boolean;
  isEmpty: boolean;
  handleOpenAddBookmarkModal: () => void;
};

const Header = ({
  id,
  collectionName,
  isPublic,
  isEmpty,
  handleOpenAddBookmarkModal,
}: THeaderProps) => {
  const onCopyUrl = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_APP_URL}/collections/public/${id}`
    );
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">{collectionName}</h1>

      <div className="flex gap-3">
        {isPublic && (
          <button
            className="btn btn-primary btn-sm normal-case flex gap-1"
            onClick={onCopyUrl}
          >
            <ClipboardDocumentIcon className="h-5 w-5" />
            <span>Copy Public URL</span>
          </button>
        )}
        {!isEmpty && (
          <button
            className="btn btn-primary btn-sm normal-case flex gap-1"
            onClick={handleOpenAddBookmarkModal}
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add Item</span>
          </button>
        )}
      </div>
    </div>
  );
};

const Collection: CustomNextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    collection,
    tags,
    bookmarks,
    loading,
    showAddBookmarkModal,
    initialFormState,
    onOpenAddBookmarkModal,
    onCloseAddBookmarkModal,
    onAddBookmarkSuccess,
    onRemoveBookmark,
  } = useCollection(id as string);

  if (loading && !collection) {
    return <Spinner />;
  }

  if (!collection) {
    return <div>Error</div>;
  }

  return (
    <div className="h-full">
      <Header
        id={collection.id}
        collectionName={collection.name}
        isPublic={collection.public}
        isEmpty={bookmarks.length === 0}
        handleOpenAddBookmarkModal={onOpenAddBookmarkModal}
      />
      <div className="mt-3 h-full">
        {loading ? (
          <Spinner />
        ) : bookmarks.length === 0 ? (
          <div className="mt-56">
            <EmptyState
              title="Empty Collection"
              subtext="Add an item to the collection"
            >
              <button
                className="btn btn-primary btn-sm normal-case"
                onClick={onOpenAddBookmarkModal}
              >
                Add Item
              </button>
            </EmptyState>
          </div>
        ) : (
          <div>
            <BookmarkTable
              bookmarks={bookmarks}
              onEditBookmark={(id?: string) => undefined}
              onRemoveBookmark={onRemoveBookmark}
            />
          </div>
        )}

        <UpsertBookmarkModal
          isOpen={showAddBookmarkModal}
          tags={tags}
          initialFormState={initialFormState}
          mode="ADD"
          onClose={onCloseAddBookmarkModal}
          onSuccess={onAddBookmarkSuccess}
        />
      </div>
    </div>
  );
};

export default Collection;
Collection.layout = Layout;
