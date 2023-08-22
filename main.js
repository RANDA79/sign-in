var nameInput = document.getElementById("nameinput");
var signup = document.getElementById("signup");
var emailInput = document.getElementById("emailinput");
var pass = document.getElementById("passinput");
var btn = document.getElementById("submet");
var error = document.querySelector('.error');
var card = document.querySelector('.card');

var mood = "Sign in";
var newArr;
var userNm = localStorage.getItem('Nmuser')

if (localStorage.user != null) {
  newArr = JSON.parse(localStorage.user);
} else {
  newArr = [];
}

// console.log(signup.innerText);

signup.addEventListener("click", function () {
  if (mood !== signup.innerText) {
    nameInput.classList.remove("d-none");

    signup.innerText = "Sign in";
   
  } else {
    nameInput.classList.add("d-none");

    signup.innerText = "Sign Up";
  }
});

btn.addEventListener("click", function () {
if (mood == signup.innerText  ) {
    
   var newUser = {
      nameUser: nameInput.value,
      emailUser: emailInput.value,
      passUser: pass.value,
    };
    newArr.push(newUser);
    console.log(newArr);
    localStorage.setItem("user", JSON.stringify(newArr));
   
}else if(mood !== signup.innerText){
 console.log("sign in") 
 
   for (let i = 0; i < newArr.length; i++) {
    var email = newArr[i].emailUser;
   var password = newArr[i].passUser;
   var user = newArr[i].nameUser;
      
           if(email == emailInput.value && password == pass.value ){
            window.location.href = 'home.html';
            localStorage.setItem('Nmuser',user)
            }else{
            error.classList.replace('d-none','show')
            }
    
       }
   
      }



clearData()
  });
 
  function clearData() {
    nameInput.value = '';
    emailInput.value = '';
    pass.value ='';
  }

  function getname() {
    card.innerHTML = `<h1 class="text-white text-center"> Welcome ${userNm}</h1>`
  }
  function removelogout() {
    localStorage.removeItem('Nmuser')
  }
  