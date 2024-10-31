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

email.addEventListener("focusout", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("You need to enter an email address.");
    emailS.textContent = "Enter the email in correct form";
  } else {
    email.setCustomValidity("");
    emailS.textContent = "";
  }
});

country.required = true;
country.addEventListener("focusout", () => {
  if (country.validity.valueMissing) {
    country.setCustomValidity("Enter your country");
    countryP.textContent = "Enter your country";
  } else {
    country.setCustomValidity("");
    countryP.textContent = "";
  }
});

zip.setAttribute("pattern", "[0-9]{5}");
zip.required = true;
zip.addEventListener("focusout", () => {
  if (zip.validity.patternMismatch) {
    zip.setCustomValidity("Enter 5-digit code");
    zipP.textContent = "Enter 5-digit code";
  } else {
    zip.setCustomValidity("");
    zipP.textContent = "";
  }
});

pass.setAttribute("pattern", "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}");
pass.required = true;
pass.addEventListener("focusout", () => {
  if (pass.validity.patternMismatch) {
    pass.setCustomValidity("Add necessary symbol");
    passP.textContent = "Add necessary symbol";
  } else {
    pass.setCustomValidity("");
    passP.textContent = "";
  }
});

passCont.required = true;
passCont.addEventListener("focusout", () => {
  if (passCont.value == pass.value) {
    passCont.setCustomValidity("");
    passContP.textContent = "";
  } else {
    passCont.setCustomValidity("Add necessary symbol");
    passContP.textContent = "Add necessary symbol";
  }
});
