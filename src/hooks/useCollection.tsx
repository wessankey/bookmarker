import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { graphql } from "../../gql";

const CollectionQuery = graphql(/* GraphQL */ `
  query CollectionQuery($where: CollectionWhereUniqueInput!) {
    collections {
      id
      name
      description
      createdAt
      public
      _count {
        bookmarks
      }
    }
    collection(where: $where) {
      id
      name
      public
      bookmarks {
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
    }
    tags {
      id
      value
      color
    }
  }
`);

const RemoveBookmarkMutation = graphql(/* GraphQL */ `
  mutation RemoveBookmarkMutation($input: RemoveBookmarkFromCollectionInput!) {
    removeBookmarkFromCollection(removeBookmarkFromCollectionInput: $input)
  }
`);

export const useCollection = (id: string) => {
  const [showAddBookmarkModal, setShowAddBookmarkModal] = useState(false);

  const { data, loading, refetch } = useQuery(CollectionQuery, {
    skip: !id,
    variables: {
      where: {
        id: (id as string) || "",
      },
    },
  });

  const tags = data?.tags.map((tag) => tag.value) || [];

  const [removeBookmarkMutation] = useMutation(RemoveBookmarkMutation, {
    refetchQueries: [CollectionQuery],
  });

  const bookmarks =
    data?.collection?.bookmarks.map((l) => ({
      ...l,
      tags: l.tags.map((tag) => ({
        ...tag,
        color: data?.tags.find((t) => t.id === tag.id)?.color || "bg-green",
      })),
    })) || [];

  const initialFormState = {
    description: "",
    tags: [],
    title: "",
    url: "",
    collectionId: id,
  };

  const onOpenAddBookmarkModal = () => {
    setShowAddBookmarkModal(true);
  };

  const onCloseAddBookmarkModal = () => {
    setShowAddBookmarkModal(false);
  };

  const onAddBookmarkSuccess = () => {
    refetch({ where: { id: id as string } });
  };

  const onRemoveBookmark = (bookmarkId: string) => {
    if (id) {
      removeBookmarkMutation({
        variables: {
          input: {
            collectionId: id as string,
            bookmarkId,
          },
        },
      });
    }
  };

  return {
    collection: {
      id: data?.collection?.id || "",
      name: data?.collection?.name || "",
      public: data?.collection?.public || false,
    },
    loading,
    bookmarks,
    tags,
    initialFormState,
    showAddBookmarkModal,
    onOpenAddBookmarkModal,
    onCloseAddBookmarkModal,
    onAddBookmarkSuccess,
    onRemoveBookmark,
  };
};
