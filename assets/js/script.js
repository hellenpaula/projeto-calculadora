
const display = document.querySelector(".display");
const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;

        if (valor === "AC") {
            display.value = "";
        } else if (valor === "+/-") {
            display.value = display.value * -1;
        } else if (valor === "=") {
            display.value = eval(display.value);
        } else {
            display.value += valor;
        }
    });
});
