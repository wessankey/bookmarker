import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { graphql } from "../../gql";
import {
  TUpsertBookmarkForm,
  TUpsertMode,
} from "../components/bookmark/UpsertBookmarkModal";

const BookmarkQuery = graphql(/* GraphQL */ `
  query BookmarkQuery($where: BookmarkWhereInput) {
    bookmarks(where: $where) {
      ...BookmarkFragment
    }
    tags {
      ...TagFragment
    }
    user {
      id
      externalServices {
        externalService {
          type
        }
      }
    }
  }
`);

const DeleteBookmarkMutation = graphql(/* GraphQL */ `
  mutation DeleteBookmarkMutation($where: BookmarkWhereUniqueInput!) {
    deleteOneBookmark(where: $where) {
      id
    }
  }
`);

export const useBookmarks = () => {
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState<string | undefined>();
  const [showAddBookmarkModal, setShowAddBookmarkModal] = useState(false);
  const [upsertMode, setUpsertMode] = useState<TUpsertMode>("ADD");

  const [deleteBookmarkMutation, { loading: deleteLoading }] = useMutation(
    DeleteBookmarkMutation,
    {
      refetchQueries: [BookmarkQuery],
    }
  );

  const [initialFormState, setInitialFormState] = useState<TUpsertBookmarkForm>(
    {
      description: "",
      tags: [],
      title: "",
      url: "",
    }
  );

  useEffect(() => {
    if (router.query.tag && typeof router.query.tag === "string") {
      setSelectedTag(router.query.tag);
    }
  }, [router.query.tag]);

  const { data, loading, refetch } = useQuery(BookmarkQuery, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    ...(selectedTag && {
      variables: {
        where: {
          tags: {
            some: {
              value: {
                equals: selectedTag,
              },
            },
          },
        },
      },
    }),
  });

  const tags = data?.tags || [];

  const bookmarks = data?.bookmarks || [];

  const handleOpenAddBookmarkModal = (mode: TUpsertMode) => {
    setUpsertMode(mode);
    setShowAddBookmarkModal(true);
  };

  const handleCloseAddBookmarkModal = () => setShowAddBookmarkModal(false);

  const handleEditBookmark = (id?: string) => {
    if (id) {
      const bookmark = bookmarks.find((l) => l.id === id);
      bookmark &&
        setInitialFormState({
          ...bookmark,
          tags: bookmark.tags.map((t) => t.id),
        });

      handleOpenAddBookmarkModal("UPDATE");
    }
  };

  const handleDeleteBookmark = (id: string) => {
    deleteBookmarkMutation({
      variables: {
        where: { id },
      },
    });
  };

  const handleTagFilterChange = (tag: string | undefined) => {
    setSelectedTag(tag);
    refetch({
      where: {
        tags: {
          some: {
            value: {
              equals: tag,
            },
          },
        },
      },
    });
  };

  return {
    bookmarks,
    tags,
    loading,
    deleteLoading,
    showAddBookmarkModal,
    selectedTag,
    initialFormState,
    upsertMode,
    handleEditBookmark,
    handleOpenAddBookmarkModal,
    handleCloseAddBookmarkModal,
    handleDeleteBookmark,
    handleTagFilterChange,
    setInitialFormState,
  };
};
