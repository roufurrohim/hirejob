import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducers = combineReducers({


})

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware)

export default store