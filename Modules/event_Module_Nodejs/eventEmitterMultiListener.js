const eventEmitter = require('events');
const notifier = new eventEmitter();


//! notifier.on(event, listener)
//? event      -> name of the event to listen for ("message")
//? listener   -> callback that runs each time the event is emitted, receives the payload
//*─────────────────────────────────────────────*//
notifier.on("message",(payload)=>{
    console.log(payload)
})

//! notifier.on(event, listener)
//? event      -> name of the event to listen for ("message") — second listener on same event
//? listener   -> callback with no params, just logs the current timestamp
//*─────────────────────────────────────────────*//
notifier.on("message",()=>{
  console.log("Time Stamp ", new Date().toISOString())
})


//! notifier.once(event, listener)
//? event      -> name of the event to listen for ("firstLogin")
//? listener   -> callback that runs only on the FIRST emit, then auto-removes itself
//*─────────────────────────────────────────────*//
notifier.once("firstLogin",(user)=>{
    console.log("The first Login user is: ",user)
})

const student = {
    user: "Ali",
    text: "Hello"
}

//! notifier.emit(event, ...args)
//? event   -> "message", triggers both registered "message" listeners
//? ...args -> student object passed as payload to each listener
//*─────────────────────────────────────────────*//
notifier.emit("message",student)

//! notifier.emit(event, ...args)
//? event   -> "firstLogin", triggers the once() listener (1st call)
//? ...args -> "Aftab" passed as the user argument
//*─────────────────────────────────────────────*//
notifier.emit("firstLogin","Aftab")

//! notifier.emit(event, ...args)
//? event   -> "firstLogin", listener already removed after first emit, so this does nothing
//? ...args -> "Ali" passed but never received by any listener
//*─────────────────────────────────────────────*//
notifier.emit("firstLogin","Ali")