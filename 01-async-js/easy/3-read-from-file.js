// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const { isUtf8 } = require("buffer");
const fs = require("fs");
const os = require("os"); // which give information about our os

console.log(os.cpus().length); // 10 means 10 cpu

// this is sync.. call
// fs.writeFileSync('./file.txt', "hello wrting from another file1");


/**
 * Note: So writefileSync(), writefile() always overwrite the file jo bhi hum string pass karengye
 * but writefile() require callback function and always pass string
 * 
 */




// fs.writeFile('./file.txt', "hello is from async file2", (err) => {
//     console.error(err);
// });


// const result = fs.readFileSync('./contact.txt', "utf-8");
// console.log(result);


// console.log('Start');
// // This is Non-Blocking code;
// fs.readFile('./contact.txt', 'utf-8', (err, result) => {
//     if(err) {
//         console.log("Error While reading File Async", err);
//     }
//     else {
//         console.log(result);
//     }
// })
// console.log("end");


/**
 * Note: readfilesync() reads the file give the output what written on them
 * but readfile() not give any output
 */


// ye file mein na append karega
// fs.appendFileSync('./file.txt', new Date().getDate().toLocaleString());
// fs.appendFileSync('./file.txt', "Hello There\n");

// fs.appendFile('./file.txt', "radhe radhe 🙏 \n", (err) => {
//     if(err) throw err;
//     console.log("Data is Appended successfully");
// });


// This cpSync is used
// fs.cpSync('./file.txt', './copy.txt');


// ye is file ko (copy.txt) ko delete kardega
// fs.unlinkSync('./copy.txt'); 

// const result = fs.statSync('./contact.txt');
// console.log(result);


/**
 * Note: Normal JavaScript mein hum ye sab nhi kar sate but nodejs ke through jo hume ye fs module deti jisse file pe operation perform karna easy hota hai
 * 
 * 
 * readFileSync() -> ye ek Blocking request hai 😱😱😱😱
 * 
 * readFile() -> ye ek Non-Blocking request hai 🤯🤯🤯🤯
 * 
 * 
 * Default Thread Pool size 4
 * Max we take up to -> if we have 8 core cpu -> then we have 8 threads
 * 
 *  so always write code which is non-blocking so waiting time increase nhi hoga
 *  
 */

const result = fs.readFileSync('contact.txt', 'utf-8');
console.log(result);



function fileReadCallback(err, contents) {
    if(err) {
        throw err;
    }
    console.log(contents);
    console.log(contents);
    console.log(contents);
}

fs.readFile('contact.txt', 'utf-8', fileReadCallback);


let s = 0;
for(let i = 0; i<1000000000; i++) {
    s += i;
}
console.log(s);