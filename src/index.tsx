import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import 'antd/dist/antd.css' // TODO: use seperate style files in the end

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.querySelector('#root'))
