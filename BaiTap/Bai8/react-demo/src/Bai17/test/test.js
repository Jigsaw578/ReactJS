import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import Home from './home'

export default function Test() {

    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}
