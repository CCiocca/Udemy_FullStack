const fs = require('fs');

// fs.writeFile("message.txt", "Hello from node!", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 

fs.readFile("./message.txt", "UTF-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  })

