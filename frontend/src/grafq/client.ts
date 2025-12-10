import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

if (!uri) {
    throw new Error("NEXT_PUBLIC_GRAPHQL_API_URL n'est pas défini T une MERDE !!!!");
}

console.log({ uri });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: uri || "/graphql" }),
});

export default client;
