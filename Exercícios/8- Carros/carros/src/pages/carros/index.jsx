import React, { Component } from "react";
import Menu from "../../components/menu"
import Jumbotron from "../../components/jumbotron";

class Carros extends Component {

    constructor() {
        //Pega tudo de Component
        super();

        //O React trabalha com gerenciamento de estados.
        this.state = {
            url: "https://5f8b07ce8453150016706460.mockapi.io/api/carros",
            carros: [],
            //Propriedades referentes ao formulário:
            id: "",
            marca: "",
            modelo: "",
            preco: ""
        }
    }

    listar = () => {
        fetch(this.state.url)
        .then(response => response.json())
        .then(response => {
            //O estado "carros" armazenará os dados dos carros cadastrados.
            this.setState({carros: response});
            this.limparCampos();
        })
        .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: concessionaria.suport@gmail.com"));
    }

    deletar = (event) => {
        event.preventDefault();

        fetch(this.state.url + "/" + event.target.value, { //Event = o botão. Colocamos o target também por que o value (que contém o id) está dentro de target.
            method: "DELETE"
        })
        .then(response => response.json())
        .then(response => {
            alert("Carro deletado com sucesso.");
            this.listar(); //O objeto chama o método listar, aquid a classe Carros.
        })
        .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: concessionaria.suport@gmail.com"));
    }

    editar = (event) => {
        event.preventDefault();

        fetch(this.state.url + "/" + event.target.value)
        .then(response => response.json())
        //Aqui a gente coloca esses valores nas propriedades, e depois essas propriedades nos values dos inputs para a edição.
        .then(response => {
            this.setState({id : response.id});
            this.setState({marca : response.marca});
            this.setState({modelo : response.modelo});
            this.setState({preco : response.preco});
        })
        .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: concessionaria.suport@gmail.com"));
    }

    //Método chamado no onSubmit do formulário
    salvar = (event) => {
        event.preventDefault();

        let carro = {
            marca: this.state.marca,
            modelo: this.state.modelo,
            preco: this.state.preco
        }

        let id = this.state.id;
    
        let metodo = (id === "" ? "POST" : "PUT");
        let urlPostOuPut = (id === "" ? this.state.url : this.state.url + "/" + id);
    
        fetch(urlPostOuPut, {
            method: metodo,
            body: JSON.stringify(carro),
            headers: {
                "content-type": "application/json"
            } 
        })
        .then(response => response.json())
        .then(response => {
            if(metodo==="POST")
                alert("Carro cadastrado com sucesso.");
            else 
                alert("Carro editado com sucesso.");
            this.listar();
        })
        .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: concessionaria.suport@gmail.com"));
    }

    limparCampos = (event) => {
        this.setState({
            id: "",
            marca: "",
            modelo: "",
            preco: ""
        });
    }

    //Nós conseguimos pegar as propriedades id, marca, modelo e preço, mas não conseguimos atualizá-las. Por isso esses métodos.
    //Para modelo e preço fazemos de outro jeito, diretamento nos inputs.
    setMarca = (event) => {
        event.preventDefault();

        this.setState({marca: event.target.value});
    }

    render() {
        return (
            <div>
                <Menu/>
                <Jumbotron titulo="Carros" descricao="Cadastre novos carros, visualize, altere e delete carros já cadastrados."/>
                <div className="container">
                    <form id="formCarros" onSubmit={this.salvar.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="inputMarca">Marca</label>
                            <input type="text" className="form-control" id="inputMarca" aria-describedby="inputMarca" placeholder="BMW.. Mercedes.." value={this.state.marca} onChange={this.setMarca.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputModelo">Modelo</label>
                            <input type="text" className="form-control" id="inputModelo" aria-describedby="inputModelo" placeholder="320i... c180..." value={this.state.modelo} onChange={event => this.setState({modelo: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPreco">Preço</label>
                            <input type="number" className="form-control" id="inputPreco" aria-describedby="inputPreco" placeholder="R$" value={this.state.preco}  onChange={event => this.setState({preco: event.target.value})}/>
                        </div>
                        <button type="reset" className="btn btn-secondary">Cancelar</button>
                        <button type="submit" className="btn btn-success" id="btnSalvar" style={{marginLeft: "10px"}}>Salvar</button>
                    </form>

                    <div style={{margin: "auto"}}>
                        <table className="table table-bordered" style={{marginTop: "40px"}}>
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Preço</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {
                                    //Ao invés de fazer o método preencher tabela e preencher na raça, aqui nós vamos lendo nossa lista de carros e pra cada objeto criamos uma linha e inserimos as informações.
                                    
                                    this.state.carros.map(carro => {
                                        return (
                                            //Precisa ter a key, e para cada objeto esta key tem que ser única, por isso colocamos o id.
                                            <tr key={carro.id}>
                                                <td>{carro.id}</td>
                                                <td>{carro.marca}</td>
                                                <td>{carro.modelo}</td>
                                                <td>{carro.preco}</td>
                                                <td>                                                        {/*Colocamos os id dos carros values dos botões, para editá-los ou deletá-los*/}
                                                    <button type="submit" className="btn btn-primary" value={carro.id} onClick={this.editar.bind(this)}>Editar</button>
                                                                                                                                                   {/*Vai usar o método deletar passando como parâmetro o botão clicado.*/}
                                                    <button type="submit" className="btn btn-danger" style={{marginLeft: "10px"}} value={carro.id} onClick={this.deletar.bind(this)}>Deletar</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    //Quando o componente for inicializado.. adicionado na árvore.
    componentDidMount() {
        this.listar();
    }
}

export default Carros;