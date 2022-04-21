import { useSelector, useDispatch } from "react-redux"
import { toggleTodo } from "../features/todoSlice"

export const TodosEl = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    const renderTodos = todos.map(todo => {
        return <div key={todo.id}>
            <p>{todo.fields.todoText}</p>
            <input type="checkbox" checked={todo.fields.done} onChange={() => dispatch(toggleTodo(todo.id))}/>
        </div>
    })

    return (
        <div>{renderTodos}</div>
    )
}
