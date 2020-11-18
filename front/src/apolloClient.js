import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4567/graphql',
  cache: new InMemoryCache()
})

client
  .query({
    query: gql`
      query Books {
        books {
          author
          bookId
          title
          price
        }
      }
    `
  })
  .then(result => console.log(result))

export default client
