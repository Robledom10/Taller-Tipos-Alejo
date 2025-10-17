interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    completada: boolean;
    estado: 'pendiente' | 'en progreso' | 'completada';
}

function filtrarTareasActivas(tareas: Tarea[]): Tarea[] {
    return tareas.filter(tarea =>
        tarea.estado === "pendiente" || tarea.estado === "en progreso"
    );
}

function actualizarTareas(tareas: Tarea[]): void {
    tareas.forEach((tarea) => {
        if (tarea.estado === "completada") {
            tarea.completada = true;
        }
    });
}

const listaTareas: Tarea[] = [
    { id: 1, titulo: "Tarea 1", descripcion: "Descripción 1", completada: false, estado: "pendiente" },
    { id: 2, titulo: "Tarea 2", descripcion: "Descripción 2", completada: true, estado: "completada" },
    { id: 3, titulo: "Tarea 3", descripcion: "Descripción 3", completada: false, estado: "en progreso" },
];

const tareasActivas = filtrarTareasActivas(listaTareas);
console.log(tareasActivas);