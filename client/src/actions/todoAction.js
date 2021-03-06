import axios from 'axios'
import { ADD_TODO, ADD_TODO_ERROR, GET_TODOS, GET_TODOS_ERROR, DELETE_TODO, DELETE_TODO_ERROR } from '../constants'

export const addTodo = (todo) => {
    return (dispatch, getState) => {
        axios.post('/todo/addtodo', { todo })
            .then((resp) => {
                console.log(resp.data)
                if(resp.data.success == true){
                    dispatch({
                        type: ADD_TODO,
                        payload: resp.data.todo
                    })
                } else{
                    dispatch({
                        type: ADD_TODO_ERROR,
                        payload: null
                    })
                }
            })
            .catch((err) => {
                console.log('Error in Adding Todos')
            })
    }
}

export const getTodos = () => {
    return (dispatch) => {
        axios.get('/todo/gettodos')
            .then((resp) => {
                console.log(resp.data)
                if(resp.data.success == true){
                    dispatch({
                        type: GET_TODOS,
                        payload: resp.data.todos
                    })
                } else{
                    dispatch({
                        type: GET_TODOS_ERROR,
                        payload: null
                    })
                }
            })
            .catch((err) => {
                console.log('Error in getting Todos')
            })
    }
}

export const deleteTodo = (todo) => {
    return (dispatch) => {
        axios.delete(`/todo/delete/${todo._id}`)
            .then((resp) => {
                if(resp.data.success == true){
                    dispatch({
                        type: DELETE_TODO
                    })
                } else{
                    dispatch({
                        type: DELETE_TODO_ERROR
                    })
                }
            })
            .catch((err) => {
                console.log('Error in Deleting Todo')
            })
    }
}