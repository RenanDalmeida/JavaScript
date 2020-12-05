//var -> Escopo global, pode sobrecarregar a aplicação.
//let -> Escopo local, após acabar uma função ela é destruída por exemplo.
//const -> Escopo local e após ter um valor atribuído não pode ser mudado, pois tem de ser constante.

//debugger -> Ao adicionar esta palavra chave no script, é adicionado um breakpoint para testar o código.

//Aqui você não pode atribuir à variável temperatura o value do objeto, pois aqui o value do objeto vale 0. Você tem que pegar o value quando você clicar no botão.
let inputTemperatura = document.querySelector("#temperatura");
let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
const converter = document.querySelector("#btnConverter");
let resultado = document.querySelector(".resultado");

converter.onclick = function(event) {
    //Isso previne que quando você clicar no submit ele atualize a página.
    event.preventDefault();
    let temperatura = Number(inputTemperatura.value);
    //Sempre use ===
    if(celsius.checked === true)
        resultado.innerHTML = `${temperatura}°C = ${(((temperatura*9) / 5) + 32).toFixed(2)}°F`;
    if(fahrenheit.checked === true)
        resultado.innerHTML = `${temperatura}°F = ${(((temperatura - 32) * 5) / 9).toFixed(2)}°C`;
}