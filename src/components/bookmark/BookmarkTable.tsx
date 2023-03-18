import {
  ArrowTopRightOnSquareIcon,
  FolderIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { DateTime } from "luxon";
import { useShareBookmark } from "../../hooks/useShareBookmark";
import { TagList } from "../tag/TagList";
import { TBookmark } from "../tag/types";
import { ShareMenu } from "./ShareMenu";

import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAddToCollection } from "../../hooks/useAddToCollection";
import { AddToCollectionMenu } from "./AddToCollectionMenu";

type TBookmarkTableProps = {
  bookmarks: TBookmark[];
  onEditBookmark: (id?: string) => void;
  onRemoveBookmark: (id: string) => void;
};

export const BookmarkTable: React.FC<TBookmarkTableProps> = ({
  bookmarks,
  onEditBookmark,
  onRemoveBookmark,
}: TBookmarkTableProps) => {
  return (
    <>
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id} className="mb-3">
          <BookmarkRow
            bookmark={bookmark}
            onEditClick={onEditBookmark}
            onRemoveBookmark={onRemoveBookmark}
          />
        </div>
      ))}
    </>
  );
};

type TBookmarkRowProps = {
  bookmark: TBookmark;
  onEditClick: (id: string) => void;
  onRemoveBookmark: (id: string) => void;
};

const BookmarkRow: React.FC<TBookmarkRowProps> = ({
  bookmark: { id, title, url, createdAt, tags },
  onEditClick,
  onRemoveBookmark,
}: TBookmarkRowProps) => {
  const {
    showShareOptions,
    showToast: showShareToast,
    availableServices,
    handleClickShare,
    handleShareToExternalService,
    handleCloseToast: handleCloseShareToast,
  } = useShareBookmark();

  const {
    collections,
    showAddMenu,
    showToast: showAddToCollectionToast,
    handleClickShowAddMenu,
    handleAddBookmarkToCollection,
    handleCloseToast: handleCloseAddToCollectionToast,
  } = useAddToCollection(url);

  return (
    <div className="max-w-screen-md">
      <div
        className="flex justify-between items-center border border-grey-light pl-5 
                    pr-3 pt-2 pb-2 rounded shadow-md hover:bg-gray-100 transition-all"
      >
        <div>
          <h3 className="text-xl">
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="mt-2 mb-2">
            <TagList tags={tags} />
          </div>
          <p className="text-xs">
            Added on {DateTime.fromISO(createdAt).toFormat("MM/dd/yyyy")}
          </p>
        </div>
        <div className="relative">
          <div className="flex">
            <div className="tooltip tooltip-bottom" data-tip="Save">
              <ArrowTopRightOnSquareIcon
                className="h-5 w-5 hover:cursor-pointer hover:text-primary"
                onClick={handleClickShare}
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Edit">
              <PencilSquareIcon
                className="ml-3 h-5 w-5 hover:cursor-pointer hover:text-primary"
                onClick={() => onEditClick(id)}
              />
            </div>
            <div
              className="tooltip tooltip-bottom"
              data-tip="Add to Collection"
            >
              <FolderIcon
                className="ml-3 h-5 w-5 hover:cursor-pointer hover:text-primary"
                onClick={() => handleClickShowAddMenu()}
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Delete">
              <TrashIcon
                className="ml-3 h-5 w-5 hover:cursor-pointer hover:text-red"
                onClick={() => onRemoveBookmark(id)}
              />
            </div>
          </div>

          <div
            className={`absolute transition-opacity ease-in ${
              showShareOptions ? "opacity-100 z-10" : "opacity-0 hidden"
            }`}
          >
            <ShareMenu
              bookmarkId={id}
              isOpen={showShareOptions}
              services={availableServices}
              onClickOutside={handleClickShare}
              onShareToExternalService={handleShareToExternalService}
            />
          </div>

          <div
            className={`absolute transition-opacity ease-in ${
              showAddMenu ? "opacity-100 z-10" : "opacity-0 hidden"
            }`}
          >
            <AddToCollectionMenu
              collections={collections || []}
              isOpen={showAddMenu}
              onClickOutside={handleClickShowAddMenu}
              onAddBookmark={handleAddBookmarkToCollection(id)}
            />
          </div>
        </div>
      </div>

      {showShareToast && (
        <div className="toast">
          <div className="alert alert-info w-72 border border-grey-light bg-white shadow-lg text-sm text-gray-500">
            <div className="flex w-full justify-between">
              <CheckCircleIcon className="h-6 w-6 stroke-green" />
              <div>
                <span>Bookmark saved</span>
              </div>
              <div>
                <XMarkIcon
                  className="h-5 w-5 hover:cursor-pointer hover:bg-grey-light p-1 rounded-md"
                  onClick={() => handleCloseShareToast()}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddToCollectionToast && (
        <div className="toast">
          <div className="alert alert-info w-72 border border-grey-light bg-white shadow-lg text-sm text-gray-500">
            <div className="flex w-full justify-between">
              <CheckCircleIcon className="h-6 w-6 stroke-green" />
              <div>
                <span>Bookmark added to collection</span>
              </div>
              <div>
                <XMarkIcon
                  className="h-5 w-5 hover:cursor-pointer hover:bg-grey-light p-1 rounded-md"
                  onClick={() => handleCloseAddToCollectionToast()}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
