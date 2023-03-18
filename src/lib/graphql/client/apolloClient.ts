import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const GRAPHQL_SERVER_URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/graphql`;

const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_URL,
  credentials: "include",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
