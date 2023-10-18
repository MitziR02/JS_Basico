let botonoes = document.querySelectorAll('.btnCal2');

botonoes.forEach(boton => {
    boton.addEventListener('click', function(event) {

        let num1 = parseFloat(document.getElementById("inputNumber1").value);
        let num2 = parseFloat(document.getElementById("inputNumber2").value);

        let operador = document.getElementById("mostrarOpe");
        let mostrarResultado = document.getElementById("resultadoCalc2");

        let resultado;

        switch(event.target.id){
            case 'btnSumar':
                operador.textContent = "+";
                resultado = num1 + num2;
            break;
            case 'btnRestar':
                operador.textContent = "-";
                resultado = num1 - num2;
            break;
            case 'btnMulti':
                operador.textContent = "*";
                resultado = num1 * num2;
            break;
            case 'btnDividir':
                operador.textContent = "/";
                resultado = num1 / num2;
            break;
            default:
                resultado = "Operacion no valida";
            break;
        }

        mostrarResultado.textContent = resultado;

    });
});