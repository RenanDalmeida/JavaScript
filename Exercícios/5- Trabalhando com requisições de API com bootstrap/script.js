let url = "https://5f7f4fa9d6aabe00166f023f.mockapi.io/api/v1/categoria";

let inputTituloCategoria = document.querySelector("#inputTituloCategoria");
let inputIdCategoria = document.querySelector("#inputIdCategoria");

let btnCadastrar = document.querySelector("#btnCadastrar");
let btnEditar, btnDeletar;

let corpoTabela = document.querySelector("#corpoTabela");

let linha, colunas;

let editando = false;

//Pure Function
const listar = () => {
    //Fetch é um XMLHTTPRequest "mais fácil". Por padrão, o method do fetch já é o GET.
    fetch(url)
    //É o onload do XHR. Se der sucesso, ENTÃO ele converte a response para JSON.
    .then(response => response.json())
    //ENTÃO pega os dados e preenche a tabela.
    .then(response => preencherTabela(response))
    //Se não for sucesso, ele gera e mostra o erro.
    .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: nyous.suport@gmail.com"));
}

const preencherTabela = (categorias) => {
    corpoTabela.innerHTML = "";

    categorias.forEach(categoria => {
        linha = document.createElement("tr");
        colunas = [document.createElement("td"), document.createElement("td"), document.createElement("td")];
        //Botões de editar e deletar de cada categoria registrada na tabela e seus atributos.
        //O que são os atributos de um elemento? Por exemplo: <button type="submit" class="btn btn-primary" onclick="editar(categoria.id)">Editar</button>
        //No exemplo acima, button é o elemento, type e class são atributos, e Editar é o value.
        btnEditar = document.createElement("button");
        btnDeletar = document.createElement("button");

        btnEditar.type = "submit";
        btnDeletar.type = "submit";

        btnEditar.innerHTML = "Editar";
        btnDeletar.innerHTML = "Deletar";

        btnEditar.className = "btn btn-primary";
        btnDeletar.className = "btn btn-danger";

        btnDeletar.style.marginLeft = "10px";

        //Não sei por que, mas aqui não funciona da seguinte forma:
        //btnEditar.onclick = editar(categoria.id);
        btnEditar.setAttribute("onclick", "editar(" + categoria.id + ")");
        btnDeletar.setAttribute("onclick", "deletar(" + categoria.id + ")");
        
        colunas[0].innerHTML = categoria.id;
        colunas[1].innerHTML = categoria.titulo;
        colunas[2].appendChild(btnEditar);
        colunas[2].appendChild(btnDeletar);

        for(let c=0; c<3; c++)
            linha.appendChild(colunas[c]);
        corpoTabela.appendChild(linha);
    });
}

const deletar = (id) => {
    fetch(url + "/" + id, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(response => {
        alert("Categoria deletada com sucesso.");
        listar();
    })
    .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: nyous.suport@gmail.com"));
}

//Por que o método de editar é um get? Porque ao clicar no botão de editar de algum objeto da tabela, ele vai pegar o id desse objeto e vai colocar em um input invisível no formulário. Vai pegar também o título da categoria e vai colocar no formulário. Assim, o usuário pode fazer as alterações e clicar em cadastrar. Se tiver o id no campo invisível, ele fará um PUT, senão, ele fará um POST.
const editar = (id) => {
    fetch(url + "/" + id)
    .then(response => response.json())
    .then(response => {
        inputIdCategoria.value = response.id;
        inputTituloCategoria.value = response.titulo;
        editando = true;
        btnCadastrar.innerHTML = "Editar";
    })
    .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: nyous.suport@gmail.com"));
}

btnCadastrar.onclick = (event) => {
    event.preventDefault();

    let categoria = {
        titulo: inputTituloCategoria.value
    }

    let metodo = (inputIdCategoria.value === "" ? "POST" : "PUT");
    let urlPostOuPut = (inputIdCategoria.value === "" ? url : url + "/" + inputIdCategoria.value);

    limparCampos();

    fetch(urlPostOuPut, {
        method: metodo,
        body: JSON.stringify(categoria),
        headers: {
            "content-type": "application/json"
        } 
    })
    .then(response => response.json())
    .then(response => {
        if(metodo==="POST")
            alert("Categoria cadastrada com sucesso.");
        else 
            alert("Categoria editada com sucesso.");
        listar();
    })
    .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: nyous.suport@gmail.com"));

    if(editando) {
        btnCadastrar.innerHTML = "Cadastrar";
        editando = false;
    }
}

const limparCampos = () => {
    inputIdCategoria.value = "";
    inputTituloCategoria.value = "";
}

window.onload = listar;