import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice(
    {
        name: 'todo',
        initialState: {
            items: []
        },
        reducers: {
            addTodo: (state, action) => {
                const newId = state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 1;
                const newtodo = {
                    id: newId,
                    text: action.payload,
                    status: 'todo',
                }
                state.items.push(newtodo);
            },
            finishTodo: (state, action) => {
                const id = action.payload
                const item = state.items.find(item => item.id === id)
                item.status = 'done'
            },
            removeTodo: (state, action) => {
                const id = action.payload
                state.items = state.items.filter(item => item.id !== id)
            }
        },

    }
)

export const { addTodo, finishTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer