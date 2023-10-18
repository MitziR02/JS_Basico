// Calculadora 1
//  Se realizó una función para cada operación de acuerdo a lo pedido en el ejercicio

function sumar(){
    let num1 = parseFloat(document.getElementById("input1S").value);
    let num2 = parseFloat(document.getElementById("input2S").value);

    let resultado = num1+num2;

    let mostrarRS = document.getElementById("resultSuma");

    mostrarRS.textContent = resultado;
}

function restar(){
    let num1 = parseFloat(document.getElementById("input1R").value);
    let num2 = parseFloat(document.getElementById("input2R").value);

    let resultado = num1-num2;

    let mostrarRS = document.getElementById("resultResta");

    mostrarRS.textContent = resultado;
}

function multiplicar(){
    let num1 = parseFloat(document.getElementById("input1M").value);
    let num2 = parseFloat(document.getElementById("input2M").value);

    let resultado = num1*num2;

    let mostrarRS = document.getElementById("resultMulti");

    mostrarRS.textContent = resultado;
}

function dividir(){
    let num1 = parseFloat(document.getElementById("input1D").value);
    let num2 = parseFloat(document.getElementById("input2D").value);

    let resultado = num1/num2;

    let mostrarRS = document.getElementById("resultDiv");

    mostrarRS.textContent = resultado;
}