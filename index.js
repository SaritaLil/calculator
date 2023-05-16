const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const num9 = document.getElementById("num9")
const num0 = document.getElementById("num0")
const coma = document.getElementById("coma")
const igual = document.getElementById("igual")
const borrar = document.getElementById("borrar")
const reiniciar = document.getElementById("reiniciar")
const suma = document.getElementById("suma")
const resta = document.getElementById("resta")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")

borrar.addEventListener("click", () => borrarUltimoDigito());
reiniciar.addEventListener("click", () => reiniciarCalculadora());

let valorActual = "0";
let operandoAnterior = null;
let operacionActual = null;

const inpTotal = document.getElementById("inpTotal");

function actualizarValor(valor) {
    if (valorActual === "0") {
        valorActual = "";
    }
    valorActual += valor;
    inpTotal.value = valorActual;
}

function manejarNumero(numero) {
    if (valorActual === "0" && numero === "0") {
        return;
    }
    actualizarValor(numero);
}

function manejarOperacion(operacion) {
    if (operacion === "=") {
        if (operacionActual === null) {
            return;
        }
        switch (operacionActual) {
            case "+":
                valorActual = parseFloat(valorActual) + parseFloat(operandoAnterior);
                break;
            case "-":
                valorActual = parseFloat(operandoAnterior) - parseFloat(valorActual);
                break;
            case "*":
                valorActual = parseFloat(valorActual) * parseFloat(operandoAnterior);
                break;
            case "/":
                valorActual = parseFloat(operandoAnterior) / parseFloat(valorActual);
                break;
            default:
                return;
        }
        inpTotal.value = valorActual.toString();
        operandoAnterior = null;
        operacionActual = null;
    } else {
        operandoAnterior = valorActual;
        valorActual = "0";
        inpTotal.value = operandoAnterior;
        operacionActual = operacion;
    }
}

function reiniciarCalculadora() {
    valorActual = "0";
    operandoAnterior = null;
    operacionActual = null;
    inpTotal.value = valorActual;
}

function borrarUltimoDigito() {
    valorActual = valorActual.slice(0, -1);
    if (valorActual === "") {
        valorActual = "0";
    }
    inpTotal.value = valorActual;
}

num1.addEventListener("click", () => manejarNumero("1"));
num2.addEventListener("click", () => manejarNumero("2"));
num3.addEventListener("click", () => manejarNumero("3"));
num4.addEventListener("click", () => manejarNumero("4"));
num5.addEventListener("click", () => manejarNumero("5"));
num6.addEventListener("click", () => manejarNumero("6"));
num7.addEventListener("click", () => manejarNumero("7"));
num8.addEventListener("click", () => manejarNumero("8"));
num9.addEventListener("click", () => manejarNumero("9"));
num0.addEventListener("click", () => manejarNumero("0"));
coma.addEventListener("click", () => manejarNumero("."));

suma.addEventListener("click", () => manejarOperacion("+"));
resta.addEventListener("click", () => manejarOperacion("-"));
multiplicar.addEventListener("click", () => manejarOperacion("*"));
dividir.addEventListener("click", () => manejarOperacion("/"));
igual.addEventListener("click", () => manejarOperacion("="));
