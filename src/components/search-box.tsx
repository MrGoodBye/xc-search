import React from 'react'
import { Select } from 'antd'
import { useQuery } from '@apollo/client'

import { searchBykeyword } from '../utils/queries'

const { Option } = Select

const SearchBox = (): JSX.Element => {
  const { loading, error, data } = useQuery(searchBykeyword('aaa'))
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder='Select a person'
      optionFilterProp='children'
      // onChange={onChange}
      // onFocus={onFocus}
      // onBlur={onBlur}
      // onSearch={onSearch}
      filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
    >
      <Option value='jack'>Jack1</Option>
      <Option value='lucy'>Lucy2</Option>
      <Option value='tom'>Tom</Option>
    </Select>
  )
}

export default SearchBox
