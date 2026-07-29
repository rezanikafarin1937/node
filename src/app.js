const fs = require("fs");
// fs.mkdir("./src/myfiles", (err) => {
//   console.log(err);
//   console.log("dir make...");
// });

// fs.readFile("./src/myfiles/about.html", "utf8", (err, data) => {
//   console.log(err);
//   console.log("read about.html file");
//   console.log("html = ", data);

//   fs.writeFile("./src/myfiles/reza.html", data, "utf8", (err) => {
//     console.log(err);
//     console.log("file make...");
//   });
// });

// fs.unlink('./src/myfiles/.txt',(err)=>{
//     if(err)
//         console.log(err)
//     console.log('delete file')
// })

// fs.rmdir("./src/myfiles/MyTest", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("delete directory");
// });

const readStream = fs.createReadStream('./src/app.txt',{encoding : 'utf-8'});
const writeStream = fs.createWriteStream('./src/app2.txt',{encoding:'utf-8'});

// readStream.on('data',(buffer)=>{
//     console.log('new buffer')
//     console.log(buffer)

//     writeStream.write('\nNew Buffer\n')
//     writeStream.write(buffer)
// })

readStream.pipe(writeStream)