import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';

export default function TodoForm() {
    const [todo, settodo] = useState('')
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(todo));
        settodo('')
    }

    return (
        <>
            <h3>TodoForm</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Add new todo' id='todo' value={todo} onChange={(e) => settodo(e.target.value)} />
                <button type='submit'>Add</button>
            </form>

        </>
    )
}
