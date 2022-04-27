import {addTodo} from "../features/todoSlice";
import Airtable from 'airtable'
// This is base-specific key with disposable account
var base = new Airtable({apiKey: 'key8ntBpAJQ9Dz4Q8'}).base('appI5bp3TfUEMBRDH');

export const addTodoThunk = (todo) => {
    return function(dispatch) {
        base('todos').create({
            "todoText": todo.fields.todoText
        }, function (err) {
            if (err) {
                console.error(err);
                return;
            }
            dispatch(addTodo(todo));
        })
    }
}