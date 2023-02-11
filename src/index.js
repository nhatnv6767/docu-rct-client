import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css'
import './assets/css/flaticon.min.css'
import './assets/css/boxicon.min.css'
import './index.css'
import './assets/css/responsive.min.css'

import { Provider } from 'react-redux'
import store from './redux/Store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
)

