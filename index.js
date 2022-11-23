let form = document.getElementById("email-form");
let input_mail = document.querySelector("input[name='email']");

form.onsubmit = (e) => {
  e.preventDefault();

  // TODO: form submit here!
  alert("Bạn đã submit form thành công");
};
