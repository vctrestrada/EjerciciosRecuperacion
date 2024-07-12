function calcularSumaPares() {
    var suma = 0;
    var cuerpoTabla = document.getElementById('cuerpoTablaSuma');
    cuerpoTabla.innerHTML = '';  // Limpiar la tabla antes de comenzar

    for (var i = 2; i <= 1000; i += 2) {
        var operacion = suma + " + " + i;
        suma += i;

        var nuevaFila = cuerpoTabla.insertRow();
        var celdaOperacion = nuevaFila.insertCell(0);
        var celdaResultado = nuevaFila.insertCell(1);

        celdaOperacion.textContent = operacion;
        celdaResultado.textContent = suma;
    }
    document.getElementById('resultadoSuma').textContent = 'La suma de los números pares del 2 al 1000 es: ' + suma;
}
