const container = document.getElementById('container');
const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const btn = document.getElementById('btn');

function saveData(e) {
    e.preventDefault();
    let name = firstName.value;
    let userPassword = password.value;
    let userConfirmPassword = confirmPassword.value;

    if (userPassword !== userConfirmPassword) {
        alert('kodu duz daxil ele');
        return;
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
    window.location.href = 'index.html';
}



btn.addEventListener('click', saveData);



const userLogin = document.getElementById('userLogin1');
const userData = JSON.parse(localStorage.getItem('userData'));

if (userData && userData.isLoggedIn) {
    userLogin.innerHTML =     `<a href="#">            <span class=""><i style="color: #fff;" class="fa-solid fa-user"></i> ` + userData.name `</span></a> <span id="logout"><i class="fa-solid fa-arrow-right-from-bracket" style="color: #ffffff;"></i></span>`;



    let logout = document.getElementById("logout");
    
    logout.addEventListener("click", (e) => {
        localStorage.removeItem('userData'); 
    });
}
console.log(userData);