import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4prdcch2fbr01xlamxg8q7u/master',
  cache: new InMemoryCache()
});
