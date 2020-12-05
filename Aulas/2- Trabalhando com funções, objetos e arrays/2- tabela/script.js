//Array
let frutas = ["Abacaxi"];
let btnCadastrar = document.querySelector("#btnCadastrar");
let btnRemover = document.querySelector("#btnRemover");
let inputFruta = document.querySelector("#fruta");
//Irá armazenar tr e td.
let linha, coluna;

btnCadastrar.onclick = function(event) {
    event.preventDefault();

    let nomeFruta = inputFruta.value.trim();

    frutas.push(nomeFruta);

    listar();
}

btnRemover.onclick = function(event) {
    event.preventDefault();

    let nomeFruta = inputFruta.value.trim();

    let indexFruta = frutas.indexOf(nomeFruta);

    if(indexFruta > -1) {
        frutas.splice(indexFruta,1); //A partir do indice indexFruta, remove 1 elemento.
        listar();
    }
    else 
        alert("Fruta não encontrada.");
    
}

function listar() {
    let tabelaCorpo = document.querySelector("#tabela-lista-corpo");
    //Zera a tabela.
    tabelaCorpo.innerHTML = "";

    //Percorre o array. Item é cada string desse array.
    frutas.forEach(item => {
        linha = document.createElement("tr");
        coluna = document.createElement("td");

        coluna.innerHTML = item;

        //Coloca a coluna como filho de linha.
        /*
            <tr>
                <td>Morango</td>
            </tr>
        */
        linha.appendChild(coluna);
        //Coloca a linha como filha da tabela.
        /*
            <table>
                <thead>
                    <th>
                        Nome da Fruta
                    </th>
                </thead>
                <tbody id="tabela-lista-corpo">
                    <tr>
                        <td>Morango</td>
                    </tr>
                </tbody>
            </table>
        */
        tabelaCorpo.appendChild(linha);
    })
    
}

//Tem que colocar aqui, pois aqui as variáveis já foram lidas e a function também.
window.onload = listar();