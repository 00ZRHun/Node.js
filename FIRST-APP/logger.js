const EventEmitter = require('events');
//const emitter = new EventEmitter();
var url = 'https://logger.io/log';
/* console.log( __filename);
console.log( __dirname); */

class Logger extends EventEmitter {
    log( message ){
        // send a HTTP message
        console.log( message );
    
        // Raise an event
        this.emit('messageLogged', {id: 1, url: "http://"});
    }
}

module.exports = Logger;

/* const logger = new Logger();

logger.on('messageLogged', (arg) => { // e, eventArg       // EC6 -> arrow function( emit the function keyword and use the => instead of it)
    console.log('Listener called', arg);
});

logger.log('Message'); */




/* log( message ){
    // send a http message
    console.log( message );

    // Raise an event
    emitter.emit('messageLogged', {id: 1, url: "http://"});
} */

//module.exports.log = log;
/* module.exports = log;

module.exports.log = log;
exports.log = log;
exports = log; */  // exports is reference to the module.exports
//module.exports.endPoint = url;


