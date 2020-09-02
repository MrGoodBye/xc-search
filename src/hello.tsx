import React from 'react'
import { gql, useQuery } from '@apollo/client'

const HELLO_QUERY = gql`
  query HelloQuery {
    viewer {
      login
    }
  }
`

function Hello(): JSX.Element {
  const { loading, error, data } = useQuery(HELLO_QUERY)
  return <div>Coming Soon</div>
}

export default Hello
