// Same Promise-returning functions as Part (iii) — comments already added above, unchanged here
function signup() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Signup completed");
      resolve();
    }, 2000);
  });
}

function sendVerificationCode() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Verification code sent");
      resolve();
    }, 4000);
  });
}

function signin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Signin completed");
      resolve();
    }, 3500);
  });
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve();
    }, 4500);
  });
}

function checkEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email checked");
      resolve();
    }, 1500);
  });
}

function composeEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email composed");
      resolve();
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent");
      resolve();
    }, 3000);
  });
}

//! async function main() — pauses at each await until that Promise resolves
//? no parameters
async function main() {
  //! await expression — suspends main() until signup()'s Promise resolves
  await signup();
  //*───────────────────────────────────────────*

  //! await expression — suspends main() until sendVerificationCode()'s Promise resolves
  await sendVerificationCode();
  //*───────────────────────────────────────────*

  //! await expression — suspends main() until signin()'s Promise resolves
  await signin();
  //*───────────────────────────────────────────*

  //! await expression — suspends main() until getData()'s Promise resolves
  await getData();
  //*───────────────────────────────────────────*

  //! await expression — suspends main() until checkEmail()'s Promise resolves
  await checkEmail();
  //*───────────────────────────────────────────*

  //! await expression — suspends main() until composeEmail()'s Promise resolves
  await composeEmail();
  //*───────────────────────────────────────────*

  //! await expression — suspends main() until sendEmail()'s Promise resolves
  await sendEmail();
  //*───────────────────────────────────────────*

  console.log("All tasks completed.....");
}

//! main() — kicks off the async function; runs top-to-bottom in call order
main();
//*───────────────────────────────────────────*