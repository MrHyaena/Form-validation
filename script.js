const formMy = document.querySelector("#formMy");

const btnSend = document.querySelector("#btnSend");

const email = document.querySelector("#email");
const emailS = document.querySelector("#emailS");
const country = document.querySelector("#country");
const countryP = document.querySelector("#countryP");
const zip = document.querySelector("#zip");
const zipP = document.querySelector("#zipP");
const pass = document.querySelector("#pass");
const passP = document.querySelector("#passP");
const passCont = document.querySelector("#passCont");
const passContP = document.querySelector("#passContP");

email.required = true;

email.addEventListener("focusout", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("You need to enter an email address.");
    emailS.textContent = "Enter the email in correct form";
  } else {
    email.setCustomValidity("");
    emailS.textContent = "";
  }
});

country.addEventListener("focusout", (event) => {
  if (country.validity.valueMissing) {
    country.setCustomValidity("");
    countryP.textContent = "";
  } else {
    country.setCustomValidity("Enter your country");
    countryP.textContent = "Enter your country";
  }
});

zip.addEventListener("focusout", (event) => {
  if (zip.validity.patternMismatch) {
    zip.setCustomValidity("Enter your country");
    zip.textContent = "Enter your country";
  } else {
    zip.setCustomValidity("");
    zip.textContent = "";
  }
});
