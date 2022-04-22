import {hydrateTodos} from "../features/todoSlice";

export default function hydrateTodosThunk() {
    return function(dispatch) {
        fetch("https://api.airtable.com/v0/appI5bp3TfUEMBRDH/todos?api_key=keyMx6L7Z9LjE5XF8")
            .then(response => response.json())
            .then(data => {
                dispatch(hydrateTodos(data.records))
            });
    }
}