/*
1 - Implemente javascript na estrutura html em anexo para que seja possível cadastrar, remover e listar contatos armazenados em um array. O objeto deve conter nome, email e telefone.

Requisitos:

    Ao clicar no botão cadastrar, salve o objeto no array, informe uma mensagem de contato salvo e liste na tabela.
    Para remover um contato, informe o e-mail do contato que deseja remover e clique no botão remover, caso não encontre o e-mail mostre um alert('Contato não encontrado'), caso removido informa Contato Removido e remova do array.
*/
let btnCadastrar = document.querySelector("#btnCadastrar");
let btnRemover = document.querySelector("#btnRemover");

let inputNome = document.querySelector("#nome");
let inputEmail = document.querySelector("#email");
let inputTelefone = document.querySelector("#telefone");

let corpoTabela = document.querySelector("#corpo-tabela");

let contatos = [];

function listar() {
    corpoTabela.innerHTML = "";
    contatos.forEach(contato => {
        let linha = document.createElement("tr");
        let colunas = [document.createElement("td"), document.createElement("td"), document.createElement("td")];

        colunas[0].innerHTML = contato.nome;
        colunas[1].innerHTML = contato.email;
        colunas[2].innerHTML = contato.telefone;

        for(let c=0; c<3; c++)
            linha.appendChild(colunas[c]);
        corpoTabela.appendChild(linha);
    })
}

btnCadastrar.onclick = function(event) {
    event.preventDefault();

    let contato = {
        nome: inputNome.value,
        email: inputEmail.value,
        telefone: inputTelefone.value
    }

    contatos.push(contato);

    alert("Contato salvo com sucesso.");

    listar();
}

btnRemover.onclick = function(event) {
    event.preventDefault();

    if(inputEmail.value != "") {
        inputNome.required = false;
        inputTelefone.required = false;

        //Achando um objeto a partir de uma propriedade em uma lista de objetos.
        let indexRemover = contatos.map(contato => contato.email).indexOf(inputEmail.value);

        if(indexRemover > -1) {
            contatos.splice(indexRemover, 1);
            alert("Contato removido com sucesso.");
            listar();
        }
        else 
            alert("Contato não encontrado.");
    }
    else 
        alert("Digite o email do contato a ser removido.");
    voltarPadrao();
}

function voltarPadrao() {
    inputNome.required = true;
    inputTelefone.required = true;
}

window.onload = listar();