let inputEmail = document.querySelector("#inputEmail");
let btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.onclick = function(event) {
    event.preventDefault();
    if(inputEmail.value.includes("@"))
        alert("Email cadastrado.");
    else 
        alert("Email inválido.");
}

/* OUTRA FORMA DE VERIFICAR:
inputEmail.onkeyup = function() {
    if(inputEmail.value.includes("@"))
        btnEnviar.disabled = false;
    else 
        btnEnviar.disabled = true;
}
*/