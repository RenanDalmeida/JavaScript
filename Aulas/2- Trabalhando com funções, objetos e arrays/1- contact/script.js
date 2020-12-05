let btnCadastrar = document.querySelector("#btnCadastrar");

btnCadastrar.onclick = function(event) {
    event.preventDefault();
    
    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let telefone = document.querySelector("#telefone");

    /*Ao colocar essa linha e chamar essa função, vá até as ferramentas do desenvolvedor. Isto sairá na área "Console".
    console.log(nome.value + " " + email.value + " " + telefone.value)*/

    //Objeto
    let dadosPessoais = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value
    }

    //console.log(dadosPessoais);

    /*Converte um objeto JS para uma string JSON
    console.log(JSON.stringify(dadosPessoais));*/
}