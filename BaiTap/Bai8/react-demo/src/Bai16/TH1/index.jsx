
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../store/couter';


export default function B16TH1() {
    const count = useSelector(state => state.todo.items)
    const dispatch = useDispatch()

    const onDecreace = () => {
        // dispatch(decrease(5))
    };

    const onIncreace = () => {
        // dispatch(increase(5))
    };

    return (
        <div>
            <span>{count}</span>
            <button onClick={onDecreace}>-</button>
            <button onClick={onIncreace}>+</button>

        </div>
    )
}
