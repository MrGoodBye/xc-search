import React from 'react'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Hello from './hello'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app1 </h2>
        <Hello />
      </div>
    </ApolloProvider>
  )
}

export default App
