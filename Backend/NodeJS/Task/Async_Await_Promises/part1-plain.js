function signup() {
  //! setTimeout(callback, delay) — schedules callback to run after delay ms
  //? callback: () => {...} — function to run after the delay
  //? delay: 2000 — milliseconds to wait before running the callback
  setTimeout(() => {
    console.log("Signup completed");
  }, 2000);
  //*───────────────────────────────────────────*
}

function sendVerificationCode() {
  //! setTimeout(callback, delay) — schedules callback to run after delay ms
  //? callback: () => {...} — function to run after the delay
  //? delay: 4000 — milliseconds to wait before running the callback
  setTimeout(() => {
    console.log("Verification code sent");
  }, 4000);
  //*───────────────────────────────────────────*
}

function signin() {
  //! setTimeout(callback, delay) — schedules callback to run after delay ms
  //? callback: () => {...} — function to run after the delay
  //? delay: 3500 — milliseconds to wait before running the callback
  setTimeout(() => {
    console.log("Signin completed");
  }, 3500);
  //*───────────────────────────────────────────*
}

function getData() {
  //! setTimeout(callback, delay) — schedules callback to run after delay ms
  //? callback: () => {...} — function to run after the delay
  //? delay: 4500 — milliseconds to wait before running the callback
  setTimeout(() => {
    console.log("Data fetched");
  }, 4500);
  //*───────────────────────────────────────────*
}

function checkEmail() {
  //! setTimeout(callback, delay) — schedules callback to run after delay ms
  //? callback: () => {...} — function to run after the delay
  //? delay: 1500 — milliseconds to wait before running the callback
  setTimeout(() => {
    console.log("Email checked");
  }, 1500);
  //*───────────────────────────────────────────*
}

function composeEmail() {
  //! setTimeout(callback, delay) — schedules callback to run after delay ms
  //? callback: () => {...} — function to run after the delay
  //? delay: 2000 — milliseconds to wait before running the callback
  setTimeout(() => {
    console.log("Email composed");
  }, 2000);
  //*───────────────────────────────────────────*
}

function sendEmail() {
  //! setTimeout(callback, delay) — schedules callback to run after delay ms
  //? callback: () => {...} — function to run after the delay
  //? delay: 3000 — milliseconds to wait before running the callback
  setTimeout(() => {
    console.log("Email sent");
  }, 3000);
  //*───────────────────────────────────────────*
}

//! Function calls fire synchronously, one after another — none of them wait
//? signup(), sendVerificationCode(), signin(), getData(), checkEmail(), composeEmail(), sendEmail() — no args, no return value used
signup();
sendVerificationCode();
signin();
getData();
checkEmail();
composeEmail();
sendEmail();
//*───────────────────────────────────────────*

//! console.log(message) — prints immediately, before any timer fires
//? message: "All tasks completed....." — string literal
console.log("All tasks completed.....");
//*───────────────────────────────────────────*