// Función para crear y mostrar la tabla de configuración electrónica
function mostrarTablaConfiguracion() {
    // Definir niveles y subniveles
    const niveles = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
    const subniveles = [
        { nombre: 's'},
        { nombre: 'p'},
        { nombre: 'd'},
        { nombre: 'f'}
    ];

    // Crear matriz para almacenar la configuración
    const configuracion = [];

    // Llenar la matriz con la configuración electrónica
    for (let i = 0; i < niveles.length; i++) {
        const nivelNum = i + 1;
        const fila = [];
        
        for (let j = 0; j < subniveles.length; j++) {
            const subnivel = subniveles[j];
            
            // Determinar si este subnivel existe en este nivel
            if (nivelNum >= j + 1) {
                const config = `${nivelNum}${subnivel.nombre}`;
                fila.push(config);
            } else {
                fila.push(''); // Subnivel no existe en este nivel
            }
        }
        
        configuracion.push(fila);
    }

    // Mostrar encabezados
    console.log("Nivel\t\ts\tp\td\tf");
    console.log("-----\t\t--\t--\t--\t--");

    // Mostrar la tabla
    for (let i = 0; i < configuracion.length; i++) {
        let filaStr = `${niveles[i]} (${i + 1})\t\t`;
        
        for (let j = 0; j < configuracion[i].length; j++) {
            filaStr += configuracion[i][j] + "\t";
        }
        
        console.log(filaStr);
    }


}

// Ejecutar la función
mostrarTablaConfiguracion();