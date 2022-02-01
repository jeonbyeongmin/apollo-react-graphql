import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const cache = new InMemoryCache();
const link = new createHttpLink({
  uri: "https://movieql2.vercel.app",
});

const client = new ApolloClient({
  cache: cache,
  link: link,
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: {
            isLiked: (value) => !value,
          },
        });
      },
    },
  },
});

export default client;
