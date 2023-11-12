if (JSON.parse(localStorage.getItem("userData"))) {
    const userLogin = document.getElementById('userLogin111');
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    if (userData && userData.isLoggedIn) {
        let divLogindi = document.createElement("div") 
        userLogin.innerHTML= ''
        divLogindi.innerHTML =     `     <span class=""><i style="color: #fff;" class="fa-solid fa-user"></i> ` + userData.name + `</span> <a href="">       <span id="logout"><i class="fa-solid fa-arrow-right-from-bracket" style="color: #ffffff;"></i></span></a>`;
        
        
        // divLogindi.appendChild(logout) 
    
    
        let logout = divLogindi.querySelector("#logout");
        
        
        
        logout.addEventListener("click", (e) => {
            localStorage.removeItem('userData'); //
        });
    
        userLogin.appendChild(divLogindi)
    }
    console.log(userData); 
  
  }