
export const FiltersEl = () => {
    return (
        <div id="filters">
            <div>
                <p>Items left: </p>
            </div>
            <div id="filterButtons">
                <button className="filterButton">All</button>
                <button className="filterButton">Active</button>
                <button className="filterButton">Completed</button>
            </div>
        </div>
    )
}
