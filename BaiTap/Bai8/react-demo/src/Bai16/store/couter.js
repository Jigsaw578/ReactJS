import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
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

})

const couterReducer = counterSlice.reducer

export const { increase, decrease } = counterSlice.actions

export default couterReducer