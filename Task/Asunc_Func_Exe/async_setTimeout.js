//! syntax: function name(callback) { setTimeout(() => {...}, delay); }
//? callback: Function to run once the delayed task finishes — must be passed in by whoever calls this function
//*───────────────────────────────────────────*
function connectDb(callback){
    setTimeout(()=>{
        console.log("Success: Server connect to Database.")
        callback();
    },2000)
}

function validateUser(callback){
    setTimeout(()=>{
     console.log("Success: The user is validated. ")
     callback()
    },1500)
}

function processPayment(callback){
    setTimeout(()=>{
     console.log("Success: The payment has been Processed. ")
     callback()
    },3000)
}

function updateInventory(callback){
    setTimeout(()=>{
     console.log("Success: The Inventory has been updated. ")
     callback()
    },2500)
}

function sendReceipt(callback){
    setTimeout(()=>{
     console.log("Success: The receipt has been send. ")
     callback()
    },1000)
}

function closeConnection(callback){
    setTimeout(()=>{
     console.log("Success: The connection has been closed.")
     callback()
    },3500)
}

//! syntax: functionName(() => {});
//? () => {}: Empty callback — satisfies the function's requirement but does nothing, since these calls are independent (not chained)
//*───────────────────────────────────────────*
connectDb(()=>{})
validateUser(()=>{})
processPayment(()=>{})
updateInventory(()=>{})
sendReceipt(()=>{})
closeConnection(()=>{})

//! syntax: console.log(message);
//? message: Runs immediately (synchronous) — prints before any of the setTimeout delays above finish
//*───────────────────────────────────────────*
console.log("All operations finished.")