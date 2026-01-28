const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

input1.setCustomValidity('')
input2.setCustomValidity('')
input3.setCustomValidity('')
input4.setCustomValidity('')

  if (input1.value.trim() == "") {
    input1.setCustomValidity("обовязкове текстове поле");
  }

  if(input2.value.trim().length < 5) {
    input2.setCustomValidity("текстове поле не менше 5 символів");
  }

  if(!input3.value.startsWith("+380")) {
    input3.setCustomValidity("обовязкове поле типу phone. 3 початком на +380");
  }

  if(!input4.value.includes("@") || !input4.value.includes(".")) {
    input4.setCustomValidity("email обовязково повинен мати @ та крапку");
  }

  if(!form.checkValidity()) {
    form.reportValidity()
    return
  }
});

