import React from 'react'
import { gql, useQuery } from '@apollo/client'

const HELLO_QUERY = gql`
  query {
    search(type: REPOSITORY, query: "apollo", first: 10) {
      repositoryCount
      issueCount
      codeCount
      edges {
        cursor
        node {
          __typename
        }
      }
    }
  }
`

function Hello(): JSX.Element {
  const { loading, error, data } = useQuery(HELLO_QUERY)
  return <div />
}

export default Hello
