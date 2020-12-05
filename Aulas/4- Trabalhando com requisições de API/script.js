//Gerada com mock api, que é um simulador de api para testes de chamada.
let url = "https://5f7f4fa9d6aabe00166f023f.mockapi.io/api/v1/categorias";
let inputCategoria = document.querySelector("#categoria");
let btnCadastrar = document.querySelector("#btnCadastrar");
let btnRemover = document.querySelector("#btnRemover");
let categorias = [];

function listar() {
    //Objeto que fará as requisições.
    let xhrGet = new XMLHttpRequest();
    //Se abrir, define a função de sucesso. Se não, ignora esta linha. Não precisa pôr () pois a função está subentendida.
    xhrGet.onload = listarSucesso;
    //Se der erro, define a função de erro..
    xhrGet.onerror = listarErro;
    //Usa o método GET no endpoint.
    xhrGet.open("GET", url);
    //Envia a requisição.
    xhrGet.send();
}

function listarSucesso() {
    console.log("Sucesso.");
    //this em JS faz referência ao objeto que está chamando essa função, no caso, o xhrGet.
    const data = this.responseText;
    //Converte os dados para JSON.
    categorias = JSON.parse(data);
    //Lista os dados retornados da API.
    console.log(categorias);
}

function listarErro(err) {
    //Se der erro exibe o erro.
    console.error(err);
}

//Agora o POST.
btnCadastrar.onclick = function(event) {
    event.preventDefault();

    let xhrPost = new XMLHttpRequest();

    xhrPost.onload = cadastroSucesso;
    xhrPost.onerror = cadastroErro;
    xhrPost.open("POST", url);
    //Configura o header.
    xhrPost.setRequestHeader("content-type", "application/json");

    //Cria a categoria.
    let params = {
        name: inputCategoria.value
    }

    //Envia o objeto a ser cadastrado, convertido para JSON.
    xhrPost.send(JSON.stringify(params));
}

function cadastroSucesso() {
    console.log("Sucesso.");
    //Mostra o status.
    console.log(this.status);
    console.log(JSON.parse(this.responseText));
}

function cadastroErro(err) {
    console.log(err);
}

btnRemover.onclick = function() {
    let xhrDelete = new XMLHttpRequest();
    xhrDelete.onload = removerSucesso;
    xhrDelete.onerror = removerErro;
    //Passa também na url o id da categoria a ser removida.
    xhrDelete.open("DELETE", url + "/" + inputCategoria.value);
    xhrDelete.send();
}

function removerSucesso() {
    console.log("Sucesso");
}

function removerErro(err) {
    console.log(err);
}

window.onload = listar();