import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { finishTodo, removeTodo } from './todoSlice';

export default function TodoList() {
    const todo = useSelector((state) => state.items);
    const [filter, setfilter] = useState('all')
    const [list, setList] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        const getList = () => {
            if (filter === 'todo') {
                const filteredList = todo.filter(item => item.status === 'todo');
                setList(filteredList);
            } else if (filter === 'done') {
                const filteredList = todo.filter(item => item.status === 'done');
                setList(filteredList);
            } else {
                setList(todo);
            }
        }
        getList();
    }, [filter, todo]);

    const finish = (id) => {
        dispatch(finishTodo(id));
    }
    const remove = (id) => {
        dispatch(removeTodo(id));
    }

    return (
        <>
            <h3>TodoList</h3>
            <button onClick={() => setfilter('all')}>All</button>
            <button onClick={() => setfilter('todo')}>Todo</button>
            <button onClick={() => setfilter('done')}>Done</button>
            <ul>
                {list?.map((item) => (
                    <li key={item.id}>{item.text}
                        {item.status === 'todo' ? <button onClick={() => finish(item.id)}>Finish</button> : <button onClick={() => remove(item.id)}>remove</button>}
                    </li>

                ))}
            </ul>
        </>
    )
}
