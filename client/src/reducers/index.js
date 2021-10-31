import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { todoReducer } from './todoReducer'

export const reducers = combineReducers({
    auth: authReducer,
    todos: todoReducer
})
