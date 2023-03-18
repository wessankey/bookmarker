import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { graphql } from "../../gql";
import {
  TUpsertBookmarkForm,
  TUpsertMode,
} from "../components/bookmark/UpsertBookmarkModal";

const BookmarkQuery = graphql(/* GraphQL */ `
  query BookmarkQuery($filter: BookmarkFilter!) {
    bookmarks(filter: $filter) {
      id
      title
      description
      url
      createdAt
      tags {
        id
        value
      }
    }
    tags {
      id
      value
      color
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
  mutation DeleteBookmarkMutation($id: String!) {
    deleteBookmark(id: $id) {
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
    variables: {
      filter: {
        tag: selectedTag,
      },
    },
  });

  const tags = data?.tags.map((tag) => tag.value) || [];

  const bookmarks =
    data?.bookmarks.map((l) => ({
      ...l,
      tags: l.tags.map((tag) => ({
        ...tag,
        color: data.tags.find((t) => t.id === tag.id)?.color || "bg-green",
      })),
    })) || [];

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
          tags: bookmark.tags.map((t) => t.value),
        });

      handleOpenAddBookmarkModal("UPDATE");
    }
  };

  const handleDeleteBookmark = (id: string) => {
    deleteBookmarkMutation({
      variables: {
        id,
      },
    });
  };

  const handleTagFilterChange = (tag: string | undefined) => {
    setSelectedTag(tag);
    refetch({
      filter: {
        tag,
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
