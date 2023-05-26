import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodoService from "./api";

export const fetchTodoListAction = createAsyncThunk('todo/fetchTodoList',
    async (payload, thunkApi) => {
        // console.log(11, payload);
        const res = await TodoService.getTodoList(payload)
        console.log('res', res);
        return res
    })

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTodoListAction.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.loading = false;

        })
        builder.addCase(fetchTodoListAction.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchTodoListAction.rejected, (state, action) => {
            state.loading = false;
        })

    }
})

export default todoSlice.reducer