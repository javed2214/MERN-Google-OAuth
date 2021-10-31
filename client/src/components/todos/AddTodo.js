import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, getTodos } from '../../actions/todoAction'
import Todos from './Todos'

const AddTodo = () => {

    const [todo, setTodo] = useState('')
    const [allTodos, setAllTodos] = useState([])

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo)
        dispatch(addTodo(todo))
        setTodo('')
        setAllTodos([...todos, todo])
    }

    return(
        <div className="center container">
        <br />
            <h4 className="center">Todo List</h4><br />
            <form className="center" style={{ position: 'fixed' }} onSubmit={(e) => handleSubmit(e)}>
                <input className="center" type="text" style={{ width: '180%' }} placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
            </form><br /><br />
            <div>
                {
                    todos.length > 0 && todos.map((todo) => {
                        return <Todos todo={todo} />
                    })
                }
            </div>
        </div>
    )
}

export default AddTodo
