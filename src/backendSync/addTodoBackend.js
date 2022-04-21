import Airtable from 'airtable'
// This is base-specific key with disposable account
var base = new Airtable({apiKey: 'key8ntBpAJQ9Dz4Q8'}).base('appI5bp3TfUEMBRDH');

export const addTodoBackend = (inputText) => {
    base('todos').create({
    "todoText": inputText
    }, function(err, record) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(record.get('todoText'));
    })
}