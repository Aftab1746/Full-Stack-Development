//! syntax: function name() { return new Promise(resolve => {...}); }
//? resolve: Callback provided by the Promise executor — calling it marks the Promise as fulfilled, letting .then() move to the next step
//*───────────────────────────────────────────*
function register() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("register: task completed");
            resolve();
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

//! syntax: promiseFn().then(() => nextFn()).then(...);
//? .then(): Runs its callback only after the Promise before it resolves — each step waits for the previous one, in order
//*───────────────────────────────────────────*
// Chain with .then()
register()
    .then(() => sendWelcomeMessage())
    .then(() => login())
    .then(() => fetchProfile())
    .then(() => updateStatus())
    .then(() => logout())
    .then(() => console.log("All operations finished!")); // Last .then() — only runs after every prior Promise has resolved