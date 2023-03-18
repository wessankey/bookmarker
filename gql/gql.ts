/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation UpsertBookmarkMutation($upsertBookmarkInput: UpsertBookmarkInput!) {\n    upsertBookmark(upsertBookmarkInput: $upsertBookmarkInput) {\n      id\n    }\n  }\n": types.UpsertBookmarkMutationDocument,
    "\n  mutation CreateCollectionMutation($data: CollectionCreateInput!) {\n    createOneCollection(data: $data) {\n      id\n    }\n  }\n": types.CreateCollectionMutationDocument,
    "\n  mutation ActivateAPITokenExternalServiceMutation(\n    $input: ActivateAPITokenServiceInput!\n  ) {\n    activateAPITokenExternalService(input: $input)\n  }\n": types.ActivateApiTokenExternalServiceMutationDocument,
    "\n  mutation DeactivateExternalServiceMutation(\n    $serviceType: ExternalServiceType!\n  ) {\n    deactivateExternalService(serviceType: $serviceType)\n  }\n": types.DeactivateExternalServiceMutationDocument,
    "\n  mutation ActivateExternalServiceMutation(\n    $input: ActivateUsernameAndPasswordServiceInput!\n  ) {\n    activateUsernameAndPasswordExternalService(input: $input)\n  }\n": types.ActivateExternalServiceMutationDocument,
    "\n  mutation AddTagMutation($upsertTagInput: UpsertTagInput!) {\n    upsertTag(upsertTagInput: $upsertTagInput) {\n      id\n    }\n  }\n": types.AddTagMutationDocument,
    "\n  mutation DeleteTagMutation($id: String!) {\n    deleteTag(id: $id)\n  }\n": types.DeleteTagMutationDocument,
    "\n  query BookmarkCollectionQuery {\n    collections {\n      id\n      name\n      bookmarks {\n        id\n        url\n      }\n    }\n  }\n": types.BookmarkCollectionQueryDocument,
    "\n  mutation AddBookmarkMutation($input: AddBookmarkToCollectionInput!) {\n    addBookmarkToCollection(addBookmarkToCollectionInput: $input)\n  }\n": types.AddBookmarkMutationDocument,
    "\n  query BookmarkQuery($filter: BookmarkFilter!) {\n    bookmarks(filter: $filter) {\n      id\n      title\n      description\n      url\n      createdAt\n      tags {\n        id\n        value\n      }\n    }\n    tags {\n      id\n      value\n      color\n    }\n    user {\n      id\n      externalServices {\n        externalService {\n          type\n        }\n      }\n    }\n  }\n": types.BookmarkQueryDocument,
    "\n  mutation DeleteBookmarkMutation($id: String!) {\n    deleteBookmark(id: $id) {\n      id\n    }\n  }\n": types.DeleteBookmarkMutationDocument,
    "\n  query CollectionQuery($where: CollectionWhereUniqueInput!) {\n    collections {\n      id\n      name\n      description\n      createdAt\n      public\n      _count {\n        bookmarks\n      }\n    }\n    collection(where: $where) {\n      id\n      name\n      public\n      bookmarks {\n        id\n        title\n        description\n        url\n        createdAt\n        tags {\n          id\n          value\n        }\n      }\n    }\n    tags {\n      id\n      value\n      color\n    }\n  }\n": types.CollectionQueryDocument,
    "\n  mutation RemoveBookmarkMutation($input: RemoveBookmarkFromCollectionInput!) {\n    removeBookmarkFromCollection(removeBookmarkFromCollectionInput: $input)\n  }\n": types.RemoveBookmarkMutationDocument,
    "\n  query CollectionsQuery {\n    collections {\n      id\n      name\n      description\n      createdAt\n      public\n      _count {\n        bookmarks\n      }\n    }\n  }\n": types.CollectionsQueryDocument,
    "\n  mutation DeleteCollectionMutation($where: CollectionWhereUniqueInput!) {\n    deleteOneCollection(where: $where) {\n      id\n    }\n  }\n": types.DeleteCollectionMutationDocument,
    "\n  mutation ShareToExternalServiceMutation($input: ShareInput!) {\n    shareToExternalService(input: $input)\n  }\n": types.ShareToExternalServiceMutationDocument,
    "\n  query AvailableExternalServicesQuery {\n    user {\n      externalServices {\n        id\n        externalService {\n          id\n          type\n        }\n      }\n    }\n  }\n": types.AvailableExternalServicesQueryDocument,
    "\n  fragment ExternalServiceCredentialFragment on ExternalServiceCredential {\n    id\n    externalService {\n      id\n      type\n      authType\n    }\n  }\n": types.ExternalServiceCredentialFragmentFragmentDoc,
    "\n  query SettingsQuery {\n    user {\n      id\n      name\n      email\n      externalServices {\n        id\n        externalService {\n          id\n          type\n          authType\n        }\n      }\n    }\n    externalServices {\n      id\n      type\n      authType\n    }\n  }\n": types.SettingsQueryDocument,
    "\n  query TagQuery {\n    tags {\n      id\n      value\n      color\n    }\n  }\n": types.TagQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpsertBookmarkMutation($upsertBookmarkInput: UpsertBookmarkInput!) {\n    upsertBookmark(upsertBookmarkInput: $upsertBookmarkInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpsertBookmarkMutation($upsertBookmarkInput: UpsertBookmarkInput!) {\n    upsertBookmark(upsertBookmarkInput: $upsertBookmarkInput) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateCollectionMutation($data: CollectionCreateInput!) {\n    createOneCollection(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCollectionMutation($data: CollectionCreateInput!) {\n    createOneCollection(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ActivateAPITokenExternalServiceMutation(\n    $input: ActivateAPITokenServiceInput!\n  ) {\n    activateAPITokenExternalService(input: $input)\n  }\n"): (typeof documents)["\n  mutation ActivateAPITokenExternalServiceMutation(\n    $input: ActivateAPITokenServiceInput!\n  ) {\n    activateAPITokenExternalService(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeactivateExternalServiceMutation(\n    $serviceType: ExternalServiceType!\n  ) {\n    deactivateExternalService(serviceType: $serviceType)\n  }\n"): (typeof documents)["\n  mutation DeactivateExternalServiceMutation(\n    $serviceType: ExternalServiceType!\n  ) {\n    deactivateExternalService(serviceType: $serviceType)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ActivateExternalServiceMutation(\n    $input: ActivateUsernameAndPasswordServiceInput!\n  ) {\n    activateUsernameAndPasswordExternalService(input: $input)\n  }\n"): (typeof documents)["\n  mutation ActivateExternalServiceMutation(\n    $input: ActivateUsernameAndPasswordServiceInput!\n  ) {\n    activateUsernameAndPasswordExternalService(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddTagMutation($upsertTagInput: UpsertTagInput!) {\n    upsertTag(upsertTagInput: $upsertTagInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddTagMutation($upsertTagInput: UpsertTagInput!) {\n    upsertTag(upsertTagInput: $upsertTagInput) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTagMutation($id: String!) {\n    deleteTag(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteTagMutation($id: String!) {\n    deleteTag(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BookmarkCollectionQuery {\n    collections {\n      id\n      name\n      bookmarks {\n        id\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query BookmarkCollectionQuery {\n    collections {\n      id\n      name\n      bookmarks {\n        id\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddBookmarkMutation($input: AddBookmarkToCollectionInput!) {\n    addBookmarkToCollection(addBookmarkToCollectionInput: $input)\n  }\n"): (typeof documents)["\n  mutation AddBookmarkMutation($input: AddBookmarkToCollectionInput!) {\n    addBookmarkToCollection(addBookmarkToCollectionInput: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BookmarkQuery($filter: BookmarkFilter!) {\n    bookmarks(filter: $filter) {\n      id\n      title\n      description\n      url\n      createdAt\n      tags {\n        id\n        value\n      }\n    }\n    tags {\n      id\n      value\n      color\n    }\n    user {\n      id\n      externalServices {\n        externalService {\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BookmarkQuery($filter: BookmarkFilter!) {\n    bookmarks(filter: $filter) {\n      id\n      title\n      description\n      url\n      createdAt\n      tags {\n        id\n        value\n      }\n    }\n    tags {\n      id\n      value\n      color\n    }\n    user {\n      id\n      externalServices {\n        externalService {\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteBookmarkMutation($id: String!) {\n    deleteBookmark(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteBookmarkMutation($id: String!) {\n    deleteBookmark(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CollectionQuery($where: CollectionWhereUniqueInput!) {\n    collections {\n      id\n      name\n      description\n      createdAt\n      public\n      _count {\n        bookmarks\n      }\n    }\n    collection(where: $where) {\n      id\n      name\n      public\n      bookmarks {\n        id\n        title\n        description\n        url\n        createdAt\n        tags {\n          id\n          value\n        }\n      }\n    }\n    tags {\n      id\n      value\n      color\n    }\n  }\n"): (typeof documents)["\n  query CollectionQuery($where: CollectionWhereUniqueInput!) {\n    collections {\n      id\n      name\n      description\n      createdAt\n      public\n      _count {\n        bookmarks\n      }\n    }\n    collection(where: $where) {\n      id\n      name\n      public\n      bookmarks {\n        id\n        title\n        description\n        url\n        createdAt\n        tags {\n          id\n          value\n        }\n      }\n    }\n    tags {\n      id\n      value\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveBookmarkMutation($input: RemoveBookmarkFromCollectionInput!) {\n    removeBookmarkFromCollection(removeBookmarkFromCollectionInput: $input)\n  }\n"): (typeof documents)["\n  mutation RemoveBookmarkMutation($input: RemoveBookmarkFromCollectionInput!) {\n    removeBookmarkFromCollection(removeBookmarkFromCollectionInput: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CollectionsQuery {\n    collections {\n      id\n      name\n      description\n      createdAt\n      public\n      _count {\n        bookmarks\n      }\n    }\n  }\n"): (typeof documents)["\n  query CollectionsQuery {\n    collections {\n      id\n      name\n      description\n      createdAt\n      public\n      _count {\n        bookmarks\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteCollectionMutation($where: CollectionWhereUniqueInput!) {\n    deleteOneCollection(where: $where) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteCollectionMutation($where: CollectionWhereUniqueInput!) {\n    deleteOneCollection(where: $where) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ShareToExternalServiceMutation($input: ShareInput!) {\n    shareToExternalService(input: $input)\n  }\n"): (typeof documents)["\n  mutation ShareToExternalServiceMutation($input: ShareInput!) {\n    shareToExternalService(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AvailableExternalServicesQuery {\n    user {\n      externalServices {\n        id\n        externalService {\n          id\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AvailableExternalServicesQuery {\n    user {\n      externalServices {\n        id\n        externalService {\n          id\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ExternalServiceCredentialFragment on ExternalServiceCredential {\n    id\n    externalService {\n      id\n      type\n      authType\n    }\n  }\n"): (typeof documents)["\n  fragment ExternalServiceCredentialFragment on ExternalServiceCredential {\n    id\n    externalService {\n      id\n      type\n      authType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SettingsQuery {\n    user {\n      id\n      name\n      email\n      externalServices {\n        id\n        externalService {\n          id\n          type\n          authType\n        }\n      }\n    }\n    externalServices {\n      id\n      type\n      authType\n    }\n  }\n"): (typeof documents)["\n  query SettingsQuery {\n    user {\n      id\n      name\n      email\n      externalServices {\n        id\n        externalService {\n          id\n          type\n          authType\n        }\n      }\n    }\n    externalServices {\n      id\n      type\n      authType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TagQuery {\n    tags {\n      id\n      value\n      color\n    }\n  }\n"): (typeof documents)["\n  query TagQuery {\n    tags {\n      id\n      value\n      color\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;