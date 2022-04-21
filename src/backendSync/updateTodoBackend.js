var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key8ntBpAJQ9Dz4Q8'}).base('appI5bp3TfUEMBRDH');

export const updateTodoBackend = (id, todoDone) => {
    base('todos').update(id, {
    "done": todoDone
    }, function(err, record) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(record.get('todoText'));
    })
}