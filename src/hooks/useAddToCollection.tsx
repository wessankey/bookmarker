import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { graphql } from "../../gql";

const CollectionQuery = graphql(/* GraphQL */ `
  query BookmarkCollectionQuery {
    collections {
      id
      name
      bookmarks {
        id
        url
      }
    }
  }
`);

const AddBookmarkMutation = graphql(/* GraphQL */ `
  mutation AddBookmarkMutation($input: AddBookmarkToCollectionInput!) {
    addBookmarkToCollection(addBookmarkToCollectionInput: $input)
  }
`);

export const useAddToCollection = (url: string) => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { data, refetch } = useQuery(CollectionQuery);
  const [addBookmarkMutation] = useMutation(AddBookmarkMutation);

  const handleClickShowAddMenu = () => setShowAddMenu((prev) => !prev);

  const collections =
    data?.collections.map((collection) => ({
      id: collection.id,
      name: collection.name,
      containsBookmark: !!collection.bookmarks.find(
        (bookmark) => bookmark.url === url
      ),
    })) || [];

  useEffect(() => {
    if (!!showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }, [showToast]);

  const handleCloseToast = () => setShowToast(false);

  const handleAddBookmarkToCollection =
    (bookmarkId: string) => (collectionId: string) => {
      setShowAddMenu(false);

      addBookmarkMutation({
        variables: {
          input: {
            bookmarkId,
            collectionId,
          },
        },
      }).then(() => {
        setShowToast(true);
        refetch();
      });
    };

  return {
    collections,
    showAddMenu,
    showToast,
    handleClickShowAddMenu,
    handleAddBookmarkToCollection,
    handleCloseToast,
  };
};
