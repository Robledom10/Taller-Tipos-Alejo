type Transaccion = {
    monto: number;
    tipo: "ingreso" | "egreso";
    categoria: string;
};

function calcularTotales(transacciones: Transaccion[]): { ingreso: number; egreso: number } {
    return transacciones.reduce(
        (totales, transaccion) => {
            if (transaccion.tipo === "ingreso") {
                totales.ingreso += transaccion.monto;
            } else {
                totales.egreso += transaccion.monto;
            }
            return totales;
        },
        { ingreso: 0, egreso: 0 } 
    );
}

const listaTransacciones: Transaccion[] = [
    { monto: 200000, tipo: "ingreso", categoria: "salario" },
    { monto: 150000, tipo: "ingreso", categoria: "freelance" },
    { monto: 80000, tipo: "egreso", categoria: "comida" },
    { monto: 100000, tipo: "egreso", categoria: "transporte" },
];

const resultado = calcularTotales(listaTransacciones);

console.log("Totales agrupados por tipo:");
console.log(resultado);
