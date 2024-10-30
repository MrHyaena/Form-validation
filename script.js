const form = document.querySelector("#form");

const btnSend = document.querySelector("#btnSend");

const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const pass = document.querySelector("#pass");
const passCont = document.querySelector("#passCont");

form.addEventListener("submit", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting email adress");
  } else {
    email.setCustomValidity("");
  }
});
