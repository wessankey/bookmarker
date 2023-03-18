import {
  BookmarkSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  QueueListIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AppSidebarListItem from "./AppSidebarListItem";

const AppSidebar = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <div className="h-screen w-60 bg-surface-light flex flex-col text-gray-700">
      <div className="p-2 pb-0 mt-2">
        <div className="flex items-center gap-1">
          <BookmarkSquareIcon className="h-9 w-9 stroke-primary" />
          <h2 className="text-xl font-bold text-primary tracking-wide">
            Bookmarker
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="mt-2 px-2">
          <AppSidebarListItem
            href="/bookmarks"
            Icon={QueueListIcon}
            label="Bookmarks"
            isActive={router.pathname === "/bookmarks"}
          />
          <AppSidebarListItem
            href="/tags"
            Icon={TagIcon}
            label="Tags"
            isActive={router.pathname === "/tags"}
          />
          <AppSidebarListItem
            href="/collections"
            Icon={FolderIcon}
            label="Collections"
            isActive={router.pathname === "/collections"}
          />
          <AppSidebarListItem
            href="/settings"
            Icon={Cog6ToothIcon}
            label="Settings"
            isActive={router.pathname === "/settings"}
          />
        </div>

        <div>
          <hr className="border-grey-medium" />
          <div className="p-2">
            <p className="text-sm text-grey-dark truncate">
              {session.data?.user.email}
            </p>
            <button
              className="btn btn-outline btn-primary btn-xs mt-2"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
