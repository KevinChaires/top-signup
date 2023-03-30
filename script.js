let pass = document.getElementById("password");
let veripass = document.getElementById("veripass");
let message = document.getElementById("message");

veripass.onchange = function () {checker()};

function checker() {
    if(veripass.value != pass.value){ //Si no son iguales
        veripass.classList.add("error"); //Rojo
        pass.classList.add("error"); //Rojo
        message.innerHTML = "The passwords don't match!"; //Mensaje de error
        message.classList.add("errortext"); //Rojo
    }
    else{
        veripass.classList.remove("error"); //Si si son iguales
        pass.classList.remove("error"); 
        message.classList.remove("errortext");
        message.innerHTML = " ";
    }
}