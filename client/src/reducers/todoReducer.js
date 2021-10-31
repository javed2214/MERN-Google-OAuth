import { ADD_TODO, ADD_TODO_ERROR, GET_TODOS, GET_TODOS_ERROR } from '../constants'

export const todoReducer = (todos = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [action.payload, ...todos]
        
        case GET_TODOS:
            return action.payload
        
        default:
            return todos
    }
}