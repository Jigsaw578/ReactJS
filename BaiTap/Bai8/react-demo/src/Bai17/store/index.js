import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import todoReducer from './todo/slide'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const Middleware = [...getDefaultMiddleware({ thunk: true }), sagaMiddleware]

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware: Middleware,
})

sagaMiddleware.run(rootSaga)