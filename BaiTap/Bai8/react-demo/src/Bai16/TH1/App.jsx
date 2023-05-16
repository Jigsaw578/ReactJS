
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import todoSlice from './todoSlice'
import TodoForm from './TodoForm';
import { configureStore } from '@reduxjs/toolkit';
import TodoList from './TodoList';

const store = configureStore({
    reducer: todoSlice,
});

const B16TH1 = () => {
    return (
        <Provider store={store}>
            <div>
                <TodoForm />
                <TodoList />
            </div>
        </Provider>
    );
};

export default B16TH1;
