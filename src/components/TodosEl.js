import { useSelector, useDispatch } from "react-redux"
import { toggleTodo, deleteTodo } from "../features/todoSlice"

export const TodosEl = () => {
    const todos = useSelector(state => state.todos.todos)
    const filterMode = useSelector(state => state.todos.filterMode)
    const dispatch = useDispatch()

    const filteredTodos = todos.filter(todo => {
        switch (filterMode) {
            case "all":
                return true
            case "active":
                return !todo.fields.done
            case "completed":
                return todo.fields.done
            default:
                return true
        }
    })

    const renderTodos = filteredTodos.map(todo => {
        return <div key={todo.id}>
            <span>{todo.fields.todoText}</span>
            <input type="checkbox" checked={todo.fields.done} onChange={() => dispatch(toggleTodo(todo.id))}/>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    })

    return (
        <div>{renderTodos}</div>
    )
}
