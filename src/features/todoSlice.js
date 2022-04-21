import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todos",

    initialState: {
        todos: [],
    },

    reducers: {
        hydrateTodos: (state, action) => {
            state.todos = action.payload
        }
    }
})

export const { hydrateTodos } = todoSlice.actions
export default todoSlice.reducer
