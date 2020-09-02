import { gql } from '@apollo/client'

export const searchBykeyword = (keyword) => gql`
  query {
    search(type: REPOSITORY, query: "${keyword}", first: 10) {
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
export default {
  searchBykeyword,
}
