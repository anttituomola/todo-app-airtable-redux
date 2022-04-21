import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todos",

    initialState: {
        todos: [],
    },

    reducers: {
        hydrateTodos: (state, action) => {
            state.todos = action.payload
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            todo.fields.done = !todo.fields.done
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
    }
})

export const {hydrateTodos, toggleTodo, addTodo} = todoSlice.actions
export default todoSlice.reducer
