alert("funciona seu porra)
let botao = document.getElementById("enviar");
botao.addEventListener("click", function() {
    let numero = document.getElementById("numero").value;
    if (numero == 20) {
        alert("Você acertou o número!");

    } else {
        alert("Você errou o número!");
    }
});
