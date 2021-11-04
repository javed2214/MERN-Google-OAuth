import React from 'react'

const deleteTodo = (todos, setTodos, t) => {
    console.log( t._id)
    setTodos(todos.filter((todo) => {
        console.log(todo._id)
        return todo._id !== t._id
    }))
}

const Todos= () => {
    return(
        <></>
    )
}

export default Todos
