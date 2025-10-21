interface Calificacion {
    estudianteId: number;
    materia: string;
    categoria: "tareas" | "quices" | "examen";
    nota: number;
}

function calcularPromedioPorCategoria(
    calificaciones: Calificacion[],
    estudianteId: number
): { tareas: number; quices: number; examen: number } {

    const acumuladores = {
        tareas: { suma: 0, cantidad: 0 },
        quices: { suma: 0, cantidad: 0 },
        examen: { suma: 0, cantidad: 0 }
    };

    for (const calificacion of calificaciones) {
        if (calificacion.estudianteId === estudianteId) {
            acumuladores[calificacion.categoria].suma += calificacion.nota;
            acumuladores[calificacion.categoria].cantidad++;
        }
    }

    const promedios = {
        tareas: acumuladores.tareas.cantidad > 0 ? acumuladores.tareas.suma / acumuladores.tareas.cantidad : 0,
        quices: acumuladores.quices.cantidad > 0 ? acumuladores.quices.suma / acumuladores.quices.cantidad : 0,
        examen: acumuladores.examen.cantidad > 0 ? acumuladores.examen.suma / acumuladores.examen.cantidad : 0,
    };

    return promedios;
}

const calificaciones: Calificacion[] = [
    { estudianteId: 1, materia: "Matemáticas", categoria: "tareas", nota: 4.5 },
    { estudianteId: 1, materia: "Matemáticas", categoria: "tareas", nota: 3.8 },
    { estudianteId: 1, materia: "Matemáticas", categoria: "quices", nota: 4.2 },
    { estudianteId: 1, materia: "Matemáticas", categoria: "examen", nota: 4.8 },
    { estudianteId: 2, materia: "Matemáticas", categoria: "tareas", nota: 2.5 },
];

const promedio = calcularPromedioPorCategoria(calificaciones, 1);
console.log(promedio);
