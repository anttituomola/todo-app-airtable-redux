var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'key8ntBpAJQ9Dz4Q8' }).base('appI5bp3TfUEMBRDH');

export const deleteTodoBackend = (id) => {
    base('todos').destroy(id, function (err) {
        if (err) {
            console.error(err);
            return;
        }
    })
}