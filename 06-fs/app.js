const fs = require('fs');

fs.readFile('index.html', (err, data) => {
    if (err) throw err;
    fs.appendFile('new.txt', data, (er) => {
        if (er) {
            console.log('smth wrong')
        }
        console.log('done')
    });
})