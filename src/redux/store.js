import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import userReducer from './reducers/users'
import msgReducer from './reducers/message'

const reducers = combineReducers({
  user: userReducer,
  message: msgReducer,
})

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware)

export default store