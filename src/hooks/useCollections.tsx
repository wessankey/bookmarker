import { useMutation, useQuery } from "@apollo/client";
import { graphql } from "../../gql";

export const CollectionsQuery = graphql(/* GraphQL */ `
  query CollectionsQuery {
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
  }
`);

const DeleteCollectionMutation = graphql(/* GraphQL */ `
  mutation DeleteCollectionMutation($where: CollectionWhereUniqueInput!) {
    deleteOneCollection(where: $where) {
      id
    }
  }
`);

export const useCollections = () => {
  const { data, loading } = useQuery(CollectionsQuery);
  const collections = data?.collections;

  const [deleteCollectionMutation] = useMutation(DeleteCollectionMutation, {
    refetchQueries: [CollectionsQuery],
  });

  const onDeleteCollection = (id: string) => {
    deleteCollectionMutation({
      variables: {
        where: {
          id,
        },
      },
    });
  };

  return {
    loading,
    collections,
    onDeleteCollection,
  };
};
