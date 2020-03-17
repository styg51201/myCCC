import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// 導入所需模組與方法
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import { rootReducer } from './reducers/index'

// react-hot-loader
// import { AppContainer } from 'react-hot-loader'
import LocalServiceWorkerRegister from './sw-register'

// ---- 使用 Middleware時 創建store ----
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

const render = () => {
  ReactDOM.render(
    // <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>,
    // </AppContainer>,
    document.getElementById('root')
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// Do this once
LocalServiceWorkerRegister()

render()

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}
