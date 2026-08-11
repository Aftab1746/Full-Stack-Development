//! syntax: function name(callback) { setTimeout(() => {...}, delay); }
//? callback: Function to run once the delayed task finishes — must be passed in by whoever calls this function
//*───────────────────────────────────────────*
function register(callback) {
    setTimeout(() => {
        console.log("register: task completed");
        callback(); // Triggers whatever was passed as callback — here, that's the next chained function
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

//! syntax: outerFn(() => { innerFn(() => { ... }); });
//? outerFn: Only starts the next function once its own setTimeout/callback has fired — this nesting is what forces strict order
//? innerFn: Each one is nested one level deeper, so execution can't skip ahead regardless of delay length
//*───────────────────────────────────────────*
// Chain them: each one only starts after the previous one's callback fires
register(() => {
    sendWelcomeMessage(() => {
        login(() => {
            fetchProfile(() => {
                updateStatus(() => {
                    logout(() => {
                        console.log("All operations finished!"); // Deepest nested line — only runs after all 6 delays have completed in order
                    });
                });
            });
        });
    });
});