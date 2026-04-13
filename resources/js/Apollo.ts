import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

// HTTP connection to the API
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
