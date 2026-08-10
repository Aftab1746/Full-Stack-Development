const eventEmitter = require('events');
const orderEmitter = new eventEmitter();

//! orderEmitter.on(event, listener)
//? event      -> name of the event to listen for ("orderPlaced")
//? listener   -> callback that runs each time the event is emitted, receives the message
//*─────────────────────────────────────────────*//
orderEmitter.on("orderPlaced",(receiveMessage)=>{
    console.log(receiveMessage)
})

//emitter.emit
const message = "Order 101 has been placed."

//! orderEmitter.emit(event, ...args)
//? event   -> "orderPlaced", triggers the registered listener
//? ...args -> message string passed as the argument to the listener
//*─────────────────────────────────────────────*//
orderEmitter.emit("orderPlaced",message)