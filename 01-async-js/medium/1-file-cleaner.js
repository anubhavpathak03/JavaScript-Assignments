// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs');

const result = fs.readFileSync('hello.txt', 'utf-8');
console.log(result);

const content = result.replace(/\s+/g, " ").trim();
console.log(content);




fs.writeFile('hello.txt', content, (err) => {
    if(err) console.log("Error: ", err)
    else console.log("Operation SuccessFull")
});