// // modules
// // const names = require('./names');
// // const sayHi = require('./utils');
// // // console.log(names);

// // sayHi('susan');
// // sayHi(names.john);
// // sayHi(names.peter);


// // const blast = require('./sayblast');
// // blast()


// // os module
// // const os = require('os');
// // const user = os.userInfo();
// // console.log(user.username);
// // console.log(os.uptime());

// // const currentOS = {
// //     name:os.type(),
// //     relese : os.release(),
// //     totalMem : os.totalmem(),
// //     freeMem : os.freemem(),
// // }
// // console.log(currentOS);


// // path module

// const path = require('path');

// const filePath = path.join('/main','sub','subsub','text.txt');
// // console.log(filePath);

// const basename = path.basename(filePath);
// // console.log(basename);

// // absolute path
// const absolute = path.resolve(__dirname,'main','sub','text.txt');
// // console.log(absolute);


// // fs module


// const fs = require('fs');

// const newpath = path.join('./main','sub','subsub','text.txt');
// console.log(newpath);


// // file write and read synchronus method

// let dfpath = './main/sub/subsub/text.txt';
// // let readf = fs.readFileSync(newpath,'utf-8');
// // console.log(readf);
// // alter way
// const { readFileSync, writeFileSync} = require('os');
// const { error } = require('console');

// let readF = fs.readFileSync(dfpath,'utf8');
// // console.log(readF);

// // fs.writeFileSync(dfpath,'file writing test 2','utf-8',{flag:'a'});

// // fs.appendFileSync(newpath,' file writing append','utf-8');
// // console.log(readF);

// // file write and read asynchronous method

// // file read
// const { readFile, writeFile} = require('fs');
// // let reading = fs.readFile(newpath,'utf-8',(err,data)=>{
// //     if (err){
// //         throw err
// //     }
// //     else{
// //         console.log(data);
// //     }
// // })
// // console.log(reading);

// // file write

// // let write = fs.writeFile(newpath,'file written asynchronus',(err,result)=>{
// //     if (err){
// //         throw err;
// //     }
// //     else{
// //         console.log(result);
// //     }
// // });






// http module
// const http = require('http');

// // create server
// const server = http.createServer((req,res)=>{
//     if (req.url === '/home'){
//         res.end(`<h1>Home page</h1>`)
//     }
//     else if (req.url ==='/about'){
//         res.end(`<h1>About page</h1>`)
//     }
//     else {
//         res.end(`<h1>Requested resource is not found </h1> <a href="/home">home</a>`);
//     }
// });
// server.listen(5000);

// -----------------------------------------------

// npm 
// npm i <package name>
// npm install -g <package name>

const lodash = require('lodash');

const item = [1,2,[3,4,[5,6]]];
const newitem = lodash.flattenDeep(item)
console.log(newitem);