const fs = require('fs');

function cat(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
} 
  

module.exports = cat