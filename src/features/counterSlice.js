import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",

    initialState: {
        todos: [],
    },

    reducers: {
        hydrateTodos: (state, action) => {
            state.todos = action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
