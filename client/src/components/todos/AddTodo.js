import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, getTodos } from '../../actions/todoAction'
import Todos from './Todos'

const AddTodo = () => {

    const [todo, setTodo] = useState('')
    const [allTodos, setAllTodos] = useState([])

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
        setAllTodos(todos)
    }, [dispatch, todos])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo.length >= 5){
            // setAllTodos([...allTodos, todo])
            dispatch(addTodo(todo))
            setTodo('')
        }
    }

    return(
        <div className="center container">
        <br />
            <h4 className="center">Todo List</h4><br />
            <form className="center" style={{ position: 'fixed' }} onSubmit={(e) => handleSubmit(e)}>
                <input className="center" type="text" style={{ width: '180%' }} placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
            </form><br /><br />
            <div>
            {allTodos.length}
                {
                    allTodos.length > 0 && allTodos.map((todo) => {
                        return <center key={todo._id}><p key={todo._id} className="card-panel #e0f2f1 teal lighten-5" style={{ width: '35%', padding: '10px', border: '2px solid grey' }}>{todo.todo}<span key={todo._id} onClick={(e) => dispatch(deleteTodo(todo))} style={{ float: 'right', marginTop: '-7px', marginRight: '-8px' }} className="btn #ef5350 red lighten-1">X</span></p></center>
                    })
                }
            </div>
        </div>
    )
}

export default AddTodo
