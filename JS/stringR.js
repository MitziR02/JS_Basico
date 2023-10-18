function stringReverso(string){
    let input = document.getElementById('inputTexto').value;
    let show = document.getElementById('resultado');

    let stringReverso = input.split('').reverse().join('');

    show.textContent = stringReverso;
}

function copiarTexto() {
    let texto = document.getElementById('resultado').textContent;

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado');
        })
        .catch(err => {
            alert('Error al copiar: ' + err.message);
        });
}



/* Etsa funcion no funciona en Opera

function copiarTexto() {
    let texto = document.getElementById('resultado').textContent;

    navigator.clipboard.writeText(texto)

    alert('Texto copiado');
}*/
