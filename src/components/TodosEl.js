import { useSelector, useDispatch } from "react-redux"
import { toggleTodo, deleteTodo } from "../features/todoSlice"

export const TodosEl = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    const renderTodos = todos.map(todo => {
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
