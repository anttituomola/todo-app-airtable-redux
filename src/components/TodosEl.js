import { useSelector } from "react-redux"

export const TodosEl = () => {
    const todos = useSelector(state => state.todos.todos)
    console.log(todos)

    const renderTodos = todos.map(todo => {
        return <div key={todo.id}>
            <p>{todo.fields.todoText}</p>
            <input type="checkbox" checked={todo.fields.done}/>
        </div>

    })

    return (
        <div>{renderTodos}</div>
    )
}
