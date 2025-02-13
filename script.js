function generarProgresion() {
    // Obtiene la nota inicial seleccionada por el usuario
    var notaInicial = document.getElementById('notaInicial').value;

    // Mapa de progresiones por nota
    var progresiones = {
        'C': ['(1ºC)', '(2ºDm)', '(3ºEm)', '(4ºF)', '(5ºG)', '(6ºAm)', '(7ºBm)'],
        'C#/Db': ['(1ºC#/Db)', '(2ºD#m/Ebm)', '(3ºFm)', '(4ºF#/Gb)', '(5ºG#/Ab)', '(6ºA#m/Bbm)', '(7ºCm)'],
        'D': ['(1ºD)', '(2ºEm)', '(3ºF#m/Gbm)', '(4ºG)', '(5ºA)', '(6ºBm)', '(7ºC#m/Dbm)'],
        'D#/Eb': ['(1ºD#/Eb)', '(2ºFm)', '(3ºGm)', '(4ºG#/Ab)', '(5ºA#/Bb)', '(6ºCm)', '(7ºDm)'],
        'E': ['(1ºE)', '(2ºF#m/Gbm)', '(3ºG#m/Abm)', '(4ºA)', '(5ºB)', '(6ºC#m/Dbm)', '(7ºD#m/Ebm)'],
        'F': ['(1ºF)', '(2ºGm)', '(3ºAm)', '(4ºA#/Bb)', '(5ºC)', '(6ºDm)', '(7ºEm)'],
        'F#/Gb': ['(1ºF#/Gb)', '(2ºG#m/Abm)', '(3ºA#m/Bbm)', '(4ºB)', '(5ºC#/Db)', '(6ºD#m/Ebm)', '(7ºFm)'],
        'G': ['(1ºG)', '(2ºAm)', '(3ºBm)', '(4ºC)', '(5ºD)', '(6ºEm)', '(7ºF#m/Gbm)'],
        'G#/Ab': ['(1ºG#/Ab)', '(2ºA#m/Bbm)', '(3ºCm)', '(4ºC#/Db)', '(5ºD#/Eb)', '(6ºFm)', '(7ºGm)'],
        'A': ['(1ºA)', '(2ºBm)', '(3ºC#m/Db)', '(4ºD)', '(5ºE)', '(6ºF#m/Gbm)', '(7ºG#m/Abm)'],
        'A#/Bb': ['(1ºA#/Bb)', '(2ºCm)', '(3ºDm)', '(4ºD#/Eb)', '(5ºF)', '(6ºGm)', '(7ºAm)'],
        'B': ['(1ºB)', '(2ºC#m/Dbm)', '(3ºD#m/Ebm)', '(4ºE)', '(5ºF#/Gb)', '(6ºG#m/Abm)', '(7ºA#m/Bb)'],



        // Agrega progresiones para otras notas según sea necesario
    };

    // Verifica si la nota ingresada está en el mapa
    if (progresiones.hasOwnProperty(notaInicial)) {
        // Obtiene la progresión correspondiente
        var progresion = progresiones[notaInicial];

        // Muestra el resultado en la página
        document.getElementById('resultado').innerHTML = 'Progresión: ' + progresion.join(' ');
    } else {
        // Nota no válida
        document.getElementById('resultado').innerHTML = 'Nota no válida. Selecciona una nota válida de la lista.';
    }
}
