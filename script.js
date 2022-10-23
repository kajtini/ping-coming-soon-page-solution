"use strict";

const inputEmail = document.querySelector(".page__email");
const invalidMessage = document.querySelector(".page__email-invalid");
const invalidMessageMobile = document.querySelector(".page__mobile-invalid");
const notifyBtn = document.querySelector(".page__notify-btn");

const regex = /^([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)\.([a-z]{2,20})$/;

const invalidToWidth = () => {
  if (window.innerWidth <= 375 && invalidMessage.dataset.status === "visible") {
    invalidMessage.dataset.status = "hidden";
    invalidMessageMobile.dataset.status = "visible";
  }

  if (
    window.innerWidth > 375 &&
    invalidMessageMobile.dataset.status === "visible"
  ) {
    invalidMessageMobile.dataset.status = "hidden";
    invalidMessage.dataset.status = "visible";
  }
};

const changeInvalidStatus = (statusStr) => {
  window.innerWidth <= 375
    ? (invalidMessageMobile.dataset.status = `${statusStr}`)
    : (invalidMessage.dataset.status = `${statusStr}`);
};

const removeWrong = () => {
  if (inputEmail.classList.contains("input-invalid")) {
    inputEmail.classList.remove("input-invalid");
    changeInvalidStatus("hidden");
  }
};

const checkEmail = (email) => {
  if (!regex.test(email) || email.trim() === "") {
    inputEmail.classList.add("input-invalid");
    changeInvalidStatus("visible");
  }

  if (regex.test(email)) {
    removeWrong();
  }
};

notifyBtn.addEventListener("click", function () {
  invalidToWidth();
  checkEmail(inputEmail.value);
});

window.addEventListener("resize", function () {
  invalidToWidth();
});
