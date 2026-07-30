//! syntax: function name() { return new Promise((resolve) => {...}); }
//? resolve: Marks the Promise as fulfilled once the delayed task finishes
//*───────────────────────────────────────────*
function connectDb(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         console.log("Success: The User is connected to Database.")
         resolve();
        },2000)
    })
}

function validateUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("Success: The user is validated.")
        resolve()
        },1500)
    })
}


function processPayment(){
    return new Promise((resolve)=>{
       setTimeout(()=>{
       console.log("Success: The Payment has been Proceed.")
       resolve();
       },3000)
    })
}

function updateInventory(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Success: The inventory has benn updated.")
            resolve()
        },2500)
    })
}

function sendReceipt(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Success: The receipt has been sent.")
            resolve();
        },1000)
    })
}

function closeConnection(){
    return new Promise((resolve)=>{
       setTimeout(()=>{
        console.log("Success: The connection has been closed.")
         resolve();
       },3500)
    })
}

//! syntax: async function name() { await somePromise(); }
//? await: Pauses this function until the Promise resolves before moving to the next line — reads like synchronous code
//*───────────────────────────────────────────*
async function runAllOperation(){
    await connectDb();          // Waits full 2000ms
    await validateUser();       // Waits full 1500ms
    await processPayment();     // Waits full 3000ms
    await updateInventory();    // Waits full 2500ms
    await sendReceipt();        // Waits full 1000ms
    await closeConnection();    // Waits full 3500ms
    console.log("All operations finished.") // All opertions finished.
}

//! syntax: functionName();
//? runAllOperation: Kicks off the entire async chain — nothing above runs until this call
//*───────────────────────────────────────────*
runAllOperation();