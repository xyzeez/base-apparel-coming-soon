const emailForm = document.querySelector('#emailForm');
const formBtn = document.querySelector('#formBtn');
let emailAddressInput = document.querySelector('#emailAddress');

let userEmail;
const pattern =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

emailAddressInput.addEventListener('focus', (e) => {
    if (e.target.getAttribute("aria-invalid")) {
        clearErrorMessage();
    }
})

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
        
    userEmail = emailAddressInput.value;
    validateEmail();
})

showErrorMessage = () => {
    emailAddressInput.setAttribute("aria-invalid", true);
}

clearErrorMessage = () => {
    emailAddressInput.setAttribute("aria-invalid", false);
}

clearInput = () => {
    emailAddressInput.value = "";
}

validateEmail = () => {
    if (userEmail.match(pattern)) {
        acceptEntry();
    } else {
        showErrorMessage();
    }
}

acceptEntry = () => {
    const formData = new FormData(emailForm);
    emailForm.submit();
    clearInput();
}
