let inputEmail = document.querySelector("#email");
let submitButton = document.querySelector(".submit-btn");
let errorMessage = document.querySelector(".error-message");


submitButton.addEventListener("click", validateEmail);

function validateEmail(){ 
    let emailValue = inputEmail.value.trim(); 

    if(emailValue == "" || emailValidator(inputEmail.value) === false){
        inputEmail.classList.add("error");
        errorMessage.style.display = "block"

}
}


function emailValidator(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}