function generarProgresion() {
    // Obtiene la nota inicial seleccionada por el usuario
    var notaInicial = document.getElementById('notaInicial').value;

    // Mapa de progresiones por nota
    var progresiones = {
        'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bm'],
        'C#': ['C#', 'D#m', 'Fm', 'F#', 'G#', 'A#m', 'Cm'],
        'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#m'],
        'D#': ['D#', 'Fm', 'Gm', 'G#', 'A#', 'Cm', 'Dm'],
        'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#m'],
        'F': ['F', 'Gm', 'Am', 'A#', 'C', 'Dm', 'Em'],
        'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'Fm'],
        'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#m'],
        'G#': ['G#', 'A#m', 'Cm', 'C#', 'D#', 'Fm', 'Gm'],
        'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#m'],
        'A#': ['A#', 'Cm', 'Dm', 'D#', 'F', 'Gm', 'Am'],
        'B': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#m'],
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

