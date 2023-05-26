import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodoListAction } from '../store/todo/slide'

export default function Home() {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.todo)

    useEffect(() => {
        dispatch(fetchTodoListAction({
            _page: 1,
            _limit: 10,
        }))
    }, [dispatch])

    return (
        <div>
            <h1>Home</h1>

            <div>{loading ? ' loading ' : 'done'}</div>
        </div>
    )
}
