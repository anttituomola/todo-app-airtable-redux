import { createSlice } from "@reduxjs/toolkit"
// import { addTodoBackend } from "../backendSync/addTodoBackend"
import { deleteTodoBackend } from "../backendSync/deleteTodoBackend"
import { updateTodoBackend } from "../backendSync/updateTodoBackend"

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
            // Update the order: backend first
            try {
                const todo = state.todos.find(todo => todo.id === action.payload)
                updateTodoBackend(todo.id, todo.fields.done)
                todo.fields.done = !todo.fields.done
            } catch (error) {
                console.error(error)
            }
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            // Update the order: backend first
            try {
                state.todos = state.todos.filter(todo => todo.id !== action.payload)
                deleteTodoBackend(action.payload)
            } catch (error) {
                console.error(error)
            }
        },
        filterMode: (state, action) => {
            state.filterMode = action.payload
        }
    }
})

export const {hydrateTodos, toggleTodo, addTodo, deleteTodo, filterMode} = todoSlice.actions
export default todoSlice.reducer
