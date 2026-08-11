//! syntax: function name(callback) { setTimeout(() => {...}, delay); }
//? callback: Function to run once the delayed task finishes — must be passed in by whoever calls this function
//*───────────────────────────────────────────*
function register(callback) {
    setTimeout(() => {
        console.log("register: task completed");
        callback(); // Runs whatever function was passed in — signals "I'm done"
    }, 2500);
}

function sendWelcomeMessage(callback) {
    setTimeout(() => {
        console.log("sendWelcomeMessage: task completed");
        callback();
    }, 3000);
}

function login(callback) {
    setTimeout(() => {
        console.log("login: task completed");
        callback();
    }, 2000);
}

function fetchProfile(callback) {
    setTimeout(() => {
        console.log("fetchProfile: task completed");
        callback();
    }, 4000);
}

function updateStatus(callback) {
    setTimeout(() => {
        console.log("updateStatus: task completed");
        callback();
    }, 1500);
}

function logout(callback) {
    setTimeout(() => {
        console.log("logout: task completed");
        callback();
    }, 3500);
}

//! syntax: functionName(() => {});
//? () => {}: Empty callback passed in just to satisfy the function's requirement — does nothing when called, since we're not chaining these
//*───────────────────────────────────────────*
// Call in requested order, but WITHOUT chaining — all fire "at once"
register(() => {});
sendWelcomeMessage(() => {});
login(() => {});
fetchProfile(() => {});
updateStatus(() => {});
logout(() => {});

//! syntax: console.log(message);
//? message: Runs immediately since it's synchronous — does NOT wait for any of the setTimeout calls above to finish
//*───────────────────────────────────────────*
console.log("All operations finished!");