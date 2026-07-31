//! syntax: function name() { return new Promise(resolve => {...}); }
//? resolve: Callback provided by the Promise executor — calling it marks the Promise as fulfilled, letting anyone awaiting/then-ing this function move on.
//*───────────────────────────────────────────*
function register() {
    return new Promise(resolve => {
        //! syntax: setTimeout(callback, delayInMs);
        //? callback: Code to run after the delay
        //? delayInMs: How long to wait before running the callback (2500ms here)
        //*───────────────────────────────────────────*
        setTimeout(() => {
            console.log("register: task completed");
            resolve(); // Signals the Promise is done — no value passed since caller doesn't need data back
        }, 2500);
    });
}

function sendWelcomeMessage() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("sendWelcomeMessage: task completed");
            resolve();
        }, 3000);
    });
}

function login() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("login: task completed");
            resolve();
        }, 2000);
    });
}

function fetchProfile() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("fetchProfile: task completed");
            resolve();
        }, 4000);
    });
}

function updateStatus() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("updateStatus: task completed");
            resolve();
        }, 1500);
    });
}

function logout() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("logout: task completed");
            resolve();
        }, 3500);
    });
}

//! syntax: async function name() { await somePromise(); }
//? await: Pauses execution of this function until the Promise resolves, before running the next line
//*───────────────────────────────────────────*
async function runAllOperations() {
    await register();            // Waits full 2500ms before continuing
    await sendWelcomeMessage();  // Waits full 3000ms before continuing
    await login();               // Waits full 2000ms before continuing
    await fetchProfile();        // Waits full 4000ms before continuing
    await updateStatus();        // Waits full 1500ms before continuing
    await logout();              // Waits full 3500ms before continuing
    console.log("All operations finished!"); // Only runs after every await above has completed
}

//! syntax: functionName();
//? runAllOperations: Kicks off the entire async chain — nothing above executes until this call happens
//*───────────────────────────────────────────*
runAllOperations();