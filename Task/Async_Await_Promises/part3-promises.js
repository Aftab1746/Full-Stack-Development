function signup() {
  //! new Promise(executor) — returns a Promise that resolves after setTimeout fires
  //? executor: (resolve) => {...} — resolve is called once the delay elapses
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Signup completed");
      resolve();
    }, 2000);
  });
  //*───────────────────────────────────────────*
}

function sendVerificationCode() {
  //! new Promise(executor) — returns a Promise that resolves after setTimeout fires
  //? executor: (resolve) => {...} — resolve is called once the delay elapses
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Verification code sent");
      resolve();
    }, 4000);
  });
  //*───────────────────────────────────────────*
}

function signin() {
  //! new Promise(executor) — returns a Promise that resolves after setTimeout fires
  //? executor: (resolve) => {...} — resolve is called once the delay elapses
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Signin completed");
      resolve();
    }, 3500);
  });
  //*───────────────────────────────────────────*
}

function getData() {
  //! new Promise(executor) — returns a Promise that resolves after setTimeout fires
  //? executor: (resolve) => {...} — resolve is called once the delay elapses
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve();
    }, 4500);
  });
  //*───────────────────────────────────────────*
}

function checkEmail() {
  //! new Promise(executor) — returns a Promise that resolves after setTimeout fires
  //? executor: (resolve) => {...} — resolve is called once the delay elapses
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email checked");
      resolve();
    }, 1500);
  });
  //*───────────────────────────────────────────*
}

function composeEmail() {
  //! new Promise(executor) — returns a Promise that resolves after setTimeout fires
  //? executor: (resolve) => {...} — resolve is called once the delay elapses
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email composed");
      resolve();
    }, 2000);
  });
  //*───────────────────────────────────────────*
}

function sendEmail() {
  //! new Promise(executor) — returns a Promise that resolves after setTimeout fires
  //? executor: (resolve) => {...} — resolve is called once the delay elapses
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent");
      resolve();
    }, 3000);
  });
  //*───────────────────────────────────────────*
}

//! .then(onFulfilled) chain — each call only starts once the previous Promise resolves
//? onFulfilled: () => fn() — invokes the next function in sequence
signup()
  .then(() => sendVerificationCode())
  .then(() => signin())
  .then(() => getData())
  .then(() => checkEmail())
  .then(() => composeEmail())
  .then(() => sendEmail())
  .then(() => console.log("All tasks completed....."));
//*───────────────────────────────────────────*