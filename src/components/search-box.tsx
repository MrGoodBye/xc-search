import React from 'react'

import { Select } from 'antd'

const { Option } = Select

const SearchBox = (): JSX.Element => {
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
      <Option value='jack'>Jack</Option>
      <Option value='lucy'>Lucy</Option>
      <Option value='tom'>Tom</Option>
    </Select>
  )
}

export default SearchBox
