let menuBtn = document.querySelector('.menu-btn');
let menuEl = document.querySelector('.menu');
let body = document.body;
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menuEl.classList.toggle('active');
  body.classList.toggle('hide__scroll')
})

const signForm = document
  .querySelector(".signin_form")
  .addEventListener("input", () => {
    const userPasswordFirst = document.querySelector(".password1");
    const userPasswordSecond = document.querySelector(".password2");
    if (userPasswordFirst.value === "") {
      userPasswordFirst.style = "border: 2px solid red";
      userPasswordSecond.style = "border: 2px solid red";
    } else if (userPasswordFirst.value !== userPasswordSecond.value) {
      userPasswordFirst.style = "border: 2px solid red";
      userPasswordSecond.style = "border: 2px solid red";
    } else if (userPasswordFirst.value === userPasswordSecond.value) {
      userPasswordFirst.style = "border: 2px solid green";
      userPasswordSecond.style = "border: 2px solid green";
    }
  });