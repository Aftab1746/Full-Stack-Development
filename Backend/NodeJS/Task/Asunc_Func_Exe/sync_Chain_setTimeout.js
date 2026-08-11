//! syntax: function name(callback) { setTimeout(() => {...}, delay); }
//? callback: Function to run once the delay finishes — here it will be the next chained step
//*───────────────────────────────────────────*
function connectDb(callback) {
    setTimeout(() => {
        console.log("Success: Server connect to Database.")
        callback();
    }, 2000)
}

function validateUser(callback) {
    setTimeout(() => {
        console.log("Success: The user is validated. ")
        callback()
    }, 1500)
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Success: The payment has been Processed. ")
        callback()
    }, 3000)
}

function updateInventory(callback) {
    setTimeout(() => {
        console.log("Success: The Inventory has been updated. ")
        callback()
    }, 2500)
}

function sendReceipt(callback) {
    setTimeout(() => {
        console.log("Success: The receipt has been send. ")
        callback()
    }, 1000)
}

function closeConnection(callback) {
    setTimeout(() => {
        console.log("Success: The connection has been closed.")
        callback()
    }, 3500)
}

//! syntax: outerFn(() => { innerFn(() => { ... }); });
//? nesting: Each function only starts once the previous one's callback fires — forces strict execution order regardless of delay length
//*───────────────────────────────────────────*
connectDb(() => {
    validateUser(() => {
        processPayment(() => {
            updateInventory(() => {
                sendReceipt(() => {
                    closeConnection(() => {
                        console.log("All operations finished.") // Deepest nested line — only runs after all 6 delays complete in order
                    })
                })
            })
        })
    })
})