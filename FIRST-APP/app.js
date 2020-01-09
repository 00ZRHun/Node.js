// Tutorial 1
/* function sayHello(name){
    console.log("Hello, " + name);  // console
} */

// sayHello('Mash');
// console.log( window ); // WRONG because it has no window & document in nodeJS( only go the OS, FS, HTTP, events )


// Tutorial 2 ( window  -> global )
// ??? check API for these glabal funct.
//console.log(); // global( can be access anywhere )

/* serTimeout();   // can be used for client / inside a node
clearTimeout();

setInterval();
stopInterval();

window   // window obj.

window.console.log;      // == console.log( prefix with the window by default )*/

// ???
//global.setTimeout();
//global.setTimeou;

/* var message = 1 + "abc";
// global.console.log( global.message );
global.console.log( message ); */


// Tutorial 3

// global var( private ) => cannot be accessed by other module( file )
    // need to export
// ???
/* var message = function(){
    console.log( "message" );
} */

//console.log( global.module ) -> WRONG


// Tutorial 4
// ???              // ../ == ././
/* const log = require('./logger'); // logger = logger.js
//console.log( logger );
//logger = 1;
console.log( log )
log( "abc" ); */
 
//console.log( global.module );         // WRONG( it is seem like a global variable in global scope, but it is not )
//console.log( module );


// Tutorial ( Path Module )
/* const path = require('path');
var pathObj = path.parse( __filename );
console.log( pathObj ); */


// Tutorial ( OS, operating system )
/* const  os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem(); */

//console.log("Total Memory : " + totalMemory);

// template string
// ES6 / ES2015 : ECMAScript
    // use backstick(`) before the number 1
/* console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`); */ 


// Tutorial ( File System  Module )
//const fs = require('fs');

/* const files = fs.readdirSync('./');
console.log( files ); */

/* const files = fs.readdir('$', function(err, files){
    if(err)    console.log( "error", err);
    else        console.log("result", files);
}); */


// Tutorial ( Event Module && Event Arguments )
/* const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => { // e, eventArg       // EC6 -> arrow function( emit the function keyword and use the => instead of it)
    console.log('Listener called', arg);
});
// Raise an event
emitter.emit('messageLogged', {id: 1, url: "http://"}); */

//emit =>  Making a noise,produce - signaling

// excersive
    // Raise: logging (data: message)
/* const EventEmittter = require('events');
const emitter = new EventEmittter();

// Register a listener
// .addEventListener
emitter.addListener('logging', function(e){
    console.log('Event called', e);
});

// Call an event
emitter.emit('logging', {data: 'message'}); */


// Tutorial ( Extending EventEmitter )

// Register a listener
/* const EventEmitter = require('events');

const Longgger = require('./logger');
const logger = new Longgger(); */
/* const EventEmitter = log.EventEmitter;
const emitter = log.emitter; */

/* emitter.on('messageLogged', (arg) => { // e, eventArg       // EC6 -> arrow function( emit the function keyword and use the => instead of it)
    console.log('Listener called', arg);
});*/

// Register a listener
/* logger.on('messageLogged', (arg) => { // e, eventArg       // EC6 -> arrow function( emit the function keyword and use the => instead of it)
    console.log('Listener called', arg);
});

logger.log('message'); */

/* const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => { // e, eventArg       // EC6 -> arrow function( emit the function keyword and use the => instead of it)
    console.log('Listener called', arg);
});

logger.log('Message'); */


// Tutorial ( HTTP module )

const http = require('http');

const server = http.createServer(function(req,res){
    if( req.url === '/' ){
        res.write('Hello World');
        res.end();
    }
    
    //else if( req.url)
});

// A very low level connection
/* server.addListener('connection', function (socket){
// server.on('connection', (socket) => {
    console.log('New connection...');
}); */

server.listen(3000);

console.log('Listening at port 3000...');