import { useDispatch, useSelector } from "react-redux"
import { filterMode } from "../features/todoSlice"

export const FiltersEl = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    const itemsLeft = todos.filter(todo => !todo.fields.done).length

    return (
        <div id="filters">
            <div>
                <p>Items left: <strong>{itemsLeft}</strong></p>
            </div>
            <div id="filterButtons">
                <button className="filterButton" onClick={() => dispatch(filterMode("all"))}>All</button>
                <button className="filterButton" onClick={() => dispatch(filterMode("active"))}>Active</button>
                <button className="filterButton" onClick={() => dispatch(filterMode("completed"))}>Completed</button>
            </div>
        </div>
    )
}
