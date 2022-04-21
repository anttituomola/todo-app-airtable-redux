import { useDispatch } from "react-redux"
import { filterMode } from "../features/todoSlice"

export const FiltersEl = () => {
    const dispatch = useDispatch()

    return (
        <div id="filters">
            <div>
                <p>Items left: </p>
            </div>
            <div id="filterButtons">
                <button className="filterButton" onClick={() => dispatch(filterMode("all"))}>All</button>
                <button className="filterButton" onClick={() => dispatch(filterMode("active"))}>Active</button>
                <button className="filterButton" onClick={() => dispatch(filterMode("completed"))}>Completed</button>
            </div>
        </div>
    )
}
