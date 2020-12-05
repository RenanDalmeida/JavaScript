let inputNome = document.querySelector("#nome");
let inputCategoria = document.querySelector("#categoria");
let inputAno = document.querySelector("#ano");
let inputId = document.querySelector("#id");

let btnCadastrar = document.querySelector("#btnCadastrar");
let btnRemover = document.querySelector("#btnRemover");
let btnEditar = document.querySelector("#btnEditar");

let url = "https://5f7f4fa9d6aabe00166f023f.mockapi.io/api/v1/filme";

let filmes = [];

let table = document.querySelector("#tabela-lista-corpo");

function get() {
    let xhrGet = new XMLHttpRequest();
    xhrGet.onload = sucesso;
    xhrGet.onerror = erro;
    xhrGet.open("GET", url);
    xhrGet.send();
}

btnCadastrar.onclick = function(event) {
    event.preventDefault();

    let xhrPost = new XMLHttpRequest();
    xhrPost.onload = sucesso;
    xhrPost.onerror = erro;
    xhrPost.open("POST", url);
    xhrPost.setRequestHeader("content-type", "application/json");

    let params = {
        nome: inputNome.value,
        categoria: inputCategoria.value,
        anoLancamento: inputAno.value
    }

    xhrPost.send(JSON.stringify(params));
}

btnRemover.onclick = function(event) {
    event.preventDefault();

    let xhrDelete = new XMLHttpRequest();
    xhrDelete.onload = sucesso;
    xhrDelete.onerror = erro;
    xhrDelete.open("DELETE", url + "/" + inputId.value);
    xhrDelete.send();
}

btnEditar.onclick = function(event) {
    event.preventDefault();

    let xhrPut = new XMLHttpRequest();
    xhrPut.onload = sucesso;
    xhrPut.onerror = erro;
    xhrPut.open("PUT", url + "/" + inputId.value);
    xhrPut.setRequestHeader("content-type", "application/json");

    let params = {
        nome: inputNome.value,
        categoria: inputCategoria.value,
        anoLancamento: inputAno.value
    }

    xhrPut.send(JSON.stringify(params));
}

inputId.onkeyup = function() {
    if(!inputId.value.length == 0) {
        btnEditar.disabled = false;
        btnRemover.disabled = false;
    }
    else {
        btnEditar.disabled = true;
        btnRemover.disabled = true;
    }
}

function sucesso() {
    table.innerHTML = "";
    //Simples
    console.log(`Sucesso. Status Code: ${this.status}`);
    filmes = JSON.parse(this.responseText);
    console.log(filmes);
    //Formatando
    let filmesObjetos = Object.values(filmes);
    filmesObjetos.forEach(filme => {
        let tds = [document.createElement("td"), document.createElement("td"), document.createElement("td"), document.createElement("td")];
        tds[0].innerHTML = filme.id;
        tds[1].innerHTML = filme.nome;
        tds[2].innerHTML = filme.categoria;
        tds[3].innerHTML = filme.anoLancamento;

        let tr = document.createElement("tr");

        for(let c=0; c<4; c++) {
            tr.appendChild(tds[c]);
        }

        table.appendChild(tr);
    });
}

function erro(err) {
    console.log(err);
}

window.onload = get;