import "babel-polyfill";
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers'
import CommonApp from '../common/containers/App'
import App from './containers/App'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <CommonApp>
            <App />
        </CommonApp>

    </Provider>,
    document.getElementById('root')
)