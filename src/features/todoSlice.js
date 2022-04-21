import { createSlice } from "@reduxjs/toolkit"
import { addTodoBackend } from "../backendSync/addTodoBackend"

export const todoSlice = createSlice({
    name: "todos",

    initialState: {
        todos: [],
        filterMode: "all"
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
            addTodoBackend(action.payload.fields.todoText)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        filterMode: (state, action) => {
            state.filterMode = action.payload
        }
    }
})

export const {hydrateTodos, toggleTodo, addTodo, deleteTodo, filterMode} = todoSlice.actions
export default todoSlice.reducer
