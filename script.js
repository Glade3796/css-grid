const loginDeets = document.getElementById("loginDeets");
const loginOutputP = document.getElementById("outputLoginP");
const loginOutputE = document.getElementById("outputLoginE");

function loginSubmit(lgnSub) {
  lgnSub.preventDefault();
  const loginData = new FormData(loginDeets);
  const loginValue = Object.fromEntries(loginData);
  console.log(loginDeets);
  console.log(loginData.keys());
  console.log(loginData);
  loginOutputE.textContent = `Email: ${loginValue.email}`;
  loginOutputP.textContent = `Password: ${loginValue.password}`;
  console.log("below");

  keys = loginData.keys();
  console.log(keys.next());
  console.log(keys.next());
  console.log(keys.next());
}

loginDeets.addEventListener("submit", loginSubmit);
