type Unidad = "cm" | "m" | "km" | "in" | "ft";

function convertirUnidad(valor: number, desde: Unidad, hasta: Unidad): number {
    if (valor < 0) {
        throw new Error("El valor no puede ser negativo.");
    }

    let valorEnMetros: number;
    switch (desde) {
        case "cm": valorEnMetros = valor / 100; break;
        case "m": valorEnMetros = valor; break;
        case "km": valorEnMetros = valor * 1000; break;
        case "in": valorEnMetros = valor * 0.0254; break;
        case "ft": valorEnMetros = valor * 0.3048; break;
        default: throw new Error("Unidad de origen no válida");
    }

    let resultado: number;
    switch (hasta) {
        case "cm": resultado = valorEnMetros * 100; break;
        case "m": resultado = valorEnMetros; break;
        case "km": resultado = valorEnMetros / 1000; break;
        case "in": resultado = valorEnMetros / 0.0254; break;
        case "ft": resultado = valorEnMetros / 0.3048; break;
        default: throw new Error("Unidad de destino no válida");
    }

    return resultado;
}

console.log(convertirUnidad(100, "cm", "m"));
console.log(convertirUnidad(2, "m", "cm"));
console.log(convertirUnidad(1, "km", "ft"));
console.log(convertirUnidad(10, "ft", "m"));
console.log(convertirUnidad(20, "in", "cm"));
