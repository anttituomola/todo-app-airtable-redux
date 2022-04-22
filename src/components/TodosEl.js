import { useSelector, useDispatch } from "react-redux"
import { toggleTodo, deleteTodo } from "../features/todoSlice"

export const TodosEl = () => {
    const todos = useSelector(state => state.todos.todos)
    const filterMode = useSelector(state => state.todos.filterMode)
    const dispatch = useDispatch()

    // Filtering buttons functionality
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

    // Sort todos by createdTime
    const sortedTodos = filteredTodos.sort((a, b) => {
        return b.createdTime - a.createdTime
    })

    const renderTodos = sortedTodos.map(todo => {
        // Create a class for done todos
        const todoClass = todo.fields.done ? "doneTask" : ""

        return <div key={todo.id} className="todosEl">
            <span className={todoClass}>{todo.fields.todoText}</span>
            <input type="checkbox" checked={todo.fields.done} onChange={() => dispatch(toggleTodo(todo.id))} />
            <button className="deleteButton" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    })

    return (
        <div>{renderTodos}</div>
    )
}
