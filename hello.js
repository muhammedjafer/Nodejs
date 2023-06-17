// setTimeout(() => {
//     console.log('hello world');
// }, 3000);
// console.log("hello world");
// console.log

//events in node.js are mentioned as below

// const EventEmitter = require('events');
// const celebrity = new EventEmitter();

// // Subscribe to celebrity for Observer 1
// celebrity.on('race win', () => {
//     console.log('congratse you are the best in the race');
// });

// celebrity.on('race win', () => {
//     console.log('i am better than you think you are');
// });


// celebrity.emit('race win');

// make http request in node.js

const http = require('http');

const req = http.request('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`data chunk is a piece of data: ${chunk}`);
        });
    res.on('end', () => {console.log('no more data'); 
    });
});

req.end();