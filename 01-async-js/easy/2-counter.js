// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let counter = 0;
function updateCounter() {
    counter += 1;
    console.log(counter);
    setTimeout(updateCounter, 1000);
}

updateCounter();