import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import couterReducer from './couter'



const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10
    },
    reducers: {
        increase: (stage, action) => {
            console.log('stage', stage.count);
            console.log('action', action);
            stage.count += action.payload
        },
        decrease: (stage, action) => {
            console.log('stage', stage.count);
            console.log('action', action);
            stage.count--
        }
    },

},
    {
        name: 'todo',
        initialState: {
            items: []
        },
        reducers: {
            addtodo: (stage, action) => {
                console.log('stage', stage.count);
                console.log('action', action);
                // stage.item.push(action)
            },

        },

    }
)

export const { increase, decrease } = counterSlice.actions
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
})