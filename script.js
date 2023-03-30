let pass = document.getElementById("password");
let veripass = document.getElementById("veripass");
let message = document.getElementById("message");

veripass.onchange = function () {checker()};

function checker() {
    if(veripass.value != pass.value){
        veripass.classList.add("error");
        message.innerHTML = "The passwords don't match!";
        message.classList.add("errortext");
    }
    else{
        veripass.classList.remove("error");
        message.classList.remove("errortext");
        message.innerHTML = " ";
    }
}