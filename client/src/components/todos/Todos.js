import React from 'react'

const Todos= ({ todo }) => {
    return(
        <div className="container">
            <p>{todo.todo}, {todo.createdAt}</p>
        </div>
    )
}

export default Todos