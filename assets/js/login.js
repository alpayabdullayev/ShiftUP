const container = document.getElementById('container');
const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
let btn = document.getElementById('submitbtnLogin'); 
const errorText = document.querySelector("span");

const userNameSurNameRegex =
  /^[A-ZƏŞÇÖÜ][a-zəşçöğıüğ]{1,24}\s[A-ZƏŞÇÖÜ][a-zəşçöğıüüğ]{2,24}$/;

const passwordRegex = /^[A-Z][a-zA-z.\d]{7,20}$/;

function saveData(e) {
    e.preventDefault();
    let name = firstName.value;
    let userPassword = password.value;
    let userConfirmPassword = confirmPassword.value;


    if (
        firstName.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmPassword.value.trim() === ""
    ) {
        errorText.textContent = "Inputları tam doldurun";
        return -1;
    }

    if (!passwordRegex.test(password.value)) {
        errorText.textContent = "Kod daxil ederken simvollara diqqet edin";
        return;
      }

      if (password.value !== confirmPassword.value) {
        errorText.textContent = "Kodu düzgün daxil edin";
        return -1;
      } else {
        //SuccesMesage
        const successMessage = document.createElement("div");
        successMessage.textContent = "Qeydiyyat başa çatdı";
        successMessage.style.color = "green";
        successMessage.style.textAlign = "center";
        successMessage.style.fontSize = "32px";
        form.appendChild(successMessage);
        btn.style.display = "none"
        setTimeout(() => {successMessage.textContent = '';}, 3000);
      }

    let userData = {
        name: name,
        password: userPassword,
        isLoggedIn: true 
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    firstName.value = '';
    password.value = '';
    confirmPassword.value = '';
    // window.location.href = 'index.html'; 

}

console.log(btn);
// bura qeder islir
btn.addEventListener('click', saveData); //locala atmaq 



