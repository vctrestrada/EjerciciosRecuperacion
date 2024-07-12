function agregarNumero() {
    var entrada = document.getElementById('entradaNumero').value;
    var mensajeError = document.getElementById('mensajeError');
    var cuerpoTabla = document.getElementById('cuerpoTablaNumeros');
    mensajeError.style.display = 'none';

    if (esNumeroValido(entrada)) {
        var nuevaFila = cuerpoTabla.insertRow();
        var celdaNumero = nuevaFila.insertCell(0);
        var celdaPrimo = nuevaFila.insertCell(1);
        celdaNumero.textContent = entrada;
        celdaPrimo.textContent = esPrimo(parseInt(entrada)) ? 'Sí' : 'No';
    } else {
        mensajeError.style.display = 'block';
    }
    document.getElementById('entradaNumero').value = '';
}

function esNumeroValido(numeroStr) {
    var numero = parseInt(numeroStr);
    return !isNaN(numero);
}

function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero == 2) return true;
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) return false;
    }
    return true;
}
