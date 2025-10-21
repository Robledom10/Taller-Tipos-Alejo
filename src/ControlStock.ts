interface Producto {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: "alimentos" | "tecnología" | "papelería";
}

function tieneBajoStock(producto: Producto): boolean {
    switch (producto.categoria) {
        case "alimentos":
            return producto.cantidad < 20;
        case "tecnología":
            return producto.cantidad < 5;
        case "papelería":
            return producto.cantidad < 50;
        default:
            return false;
    }
}

const productos: Producto[] = [
    { id: 1, nombre: "Manzanas", cantidad: 15, categoria: "alimentos" },
    { id: 2, nombre: "Laptop", cantidad: 8, categoria: "tecnología" },
    { id: 3, nombre: "Cuadernos", cantidad: 45, categoria: "papelería" },
    { id: 4, nombre: "Mouse", cantidad: 2, categoria: "tecnología" }
];

for (const p of productos) {
    console.log(`${p.nombre} → Bajo stock: ${tieneBajoStock(p)}`);
}
