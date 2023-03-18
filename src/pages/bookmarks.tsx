import { CustomNextPage } from "../../types/CustomNextPage";
import { BookmarkTable } from "../components/bookmark/BookmarkTable";
import { BookmarkToolbar } from "../components/bookmark/BookmarkToolbar";
import {
  TUpsertMode,
  UpsertBookmarkModal,
} from "../components/bookmark/UpsertBookmarkModal";
import { EmptyState } from "../components/common/EmptyState";
import { Spinner } from "../components/common/Spinner";
import Layout from "../components/layout/Layout";
import { useBookmarks } from "../hooks/useBookmarks";

type THeaderProps = {
  tags: string[];
  selectedTag?: string;
  hasBookmarks: boolean;
  handleTagFilterChange: (tag?: string) => void;
  handleOpenAddBookmarkModal: (mode: TUpsertMode) => void;
};

const Header = ({
  tags,
  selectedTag,
  hasBookmarks,
  handleTagFilterChange,
  handleOpenAddBookmarkModal,
}: THeaderProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Bookmarks</h1>
      <div className="flex justify-between items-center mb-7 mt-3">
        <BookmarkToolbar
          allTags={tags}
          selectedTag={selectedTag}
          onTagFilterChange={handleTagFilterChange}
        />

        {hasBookmarks && (
          <button
            className="btn btn-primary btn-md normal-case"
            onClick={() => handleOpenAddBookmarkModal("ADD")}
          >
            Add Bookmark
          </button>
        )}
      </div>
    </div>
  );
};

const Bookmarks: CustomNextPage = () => {
  const {
    bookmarks,
    tags,
    loading,
    showAddBookmarkModal,
    selectedTag,
    initialFormState,
    upsertMode,
    handleEditBookmark,
    handleOpenAddBookmarkModal,
    handleCloseAddBookmarkModal,
    handleDeleteBookmark,
    handleTagFilterChange,
  } = useBookmarks();

  return (
    <>
      <Header
        selectedTag={selectedTag}
        tags={tags}
        hasBookmarks={bookmarks.length > 0}
        handleOpenAddBookmarkModal={handleOpenAddBookmarkModal}
        handleTagFilterChange={handleTagFilterChange}
      />
      <UpsertBookmarkModal
        isOpen={showAddBookmarkModal}
        onClose={handleCloseAddBookmarkModal}
        tags={tags}
        initialFormState={initialFormState}
        mode={upsertMode}
        onSuccess={() => undefined}
      />
      {loading ? (
        <Spinner />
      ) : bookmarks.length === 0 ? (
        <div className="mt-36">
          <EmptyState
            title="No Bookmarks"
            subtext="Add a bookmark to get started!"
          >
            <button
              className="btn btn-primary btn-md normal-case"
              onClick={() => handleOpenAddBookmarkModal("ADD")}
            >
              Add Bookmark
            </button>
          </EmptyState>
        </div>
      ) : (
        <BookmarkTable
          bookmarks={bookmarks}
          onEditBookmark={handleEditBookmark}
          onRemoveBookmark={handleDeleteBookmark}
        />
      )}
    </>
  );
};

export default Bookmarks;
Bookmarks.requireAuth = true;
Bookmarks.layout = Layout;
