function signup(callback) {
  //! setTimeout(fn, delay) — waits, logs, then invokes the passed-in callback
  //? fn: () => {...} — logs completion and calls callback()
  //? delay: 2000 — milliseconds to wait
  setTimeout(() => {
    console.log("Signup completed");
    callback();
  }, 2000);
  //*───────────────────────────────────────────*
}

function sendVerificationCode(callback) {
  //! setTimeout(fn, delay) — waits, logs, then invokes the passed-in callback
  //? fn: () => {...} — logs completion and calls callback()
  //? delay: 4000 — milliseconds to wait
  setTimeout(() => {
    console.log("Verification code sent");
    callback();
  }, 4000);
  //*───────────────────────────────────────────*
}

function signin(callback) {
  //! setTimeout(fn, delay) — waits, logs, then invokes the passed-in callback
  //? fn: () => {...} — logs completion and calls callback()
  //? delay: 3500 — milliseconds to wait
  setTimeout(() => {
    console.log("Signin completed");
    callback();
  }, 3500);
  //*───────────────────────────────────────────*
}

function getData(callback) {
  //! setTimeout(fn, delay) — waits, logs, then invokes the passed-in callback
  //? fn: () => {...} — logs completion and calls callback()
  //? delay: 4500 — milliseconds to wait
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 4500);
  //*───────────────────────────────────────────*
}

function checkEmail(callback) {
  //! setTimeout(fn, delay) — waits, logs, then invokes the passed-in callback
  //? fn: () => {...} — logs completion and calls callback()
  //? delay: 1500 — milliseconds to wait
  setTimeout(() => {
    console.log("Email checked");
    callback();
  }, 1500);
  //*───────────────────────────────────────────*
}

function composeEmail(callback) {
  //! setTimeout(fn, delay) — waits, logs, then invokes the passed-in callback
  //? fn: () => {...} — logs completion and calls callback()
  //? delay: 2000 — milliseconds to wait
  setTimeout(() => {
    console.log("Email composed");
    callback();
  }, 2000);
  //*───────────────────────────────────────────*
}

function sendEmail(callback) {
  //! setTimeout(fn, delay) — waits, logs, then invokes the passed-in callback
  //? fn: () => {...} — logs completion and calls callback()
  //? delay: 3000 — milliseconds to wait
  setTimeout(() => {
    console.log("Email sent");
    callback();
  }, 3000);
  //*───────────────────────────────────────────*
}

//! Nested callback chain — each function only starts once the previous one's callback fires
//? signup(callback) — callback triggers sendVerificationCode
//? sendVerificationCode(callback) — callback triggers signin
//? signin(callback) — callback triggers getData
//? getData(callback) — callback triggers checkEmail
//? checkEmail(callback) — callback triggers composeEmail
//? composeEmail(callback) — callback triggers sendEmail
//? sendEmail(callback) — callback logs the final completion message
signup(() => {
  sendVerificationCode(() => {
    signin(() => {
      getData(() => {
        checkEmail(() => {
          composeEmail(() => {
            sendEmail(() => {
              console.log("All tasks completed.....");
            });
          });
        });
      });
    });
  });
});
//*───────────────────────────────────────────*