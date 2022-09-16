const fs = require("fs");

fs.readFile('dog.json',(err.data) => {
    if(err) throw err;
    let dog  = JSON.parse(data);
    console.log(cat)
});