type tipoCambio = 'nombre' | 'email' | 'contraseña';

interface CambioUsuario {
    tipo: tipoCambio;
    valorAnterior: string | null;
    valorNuevo: string | null;
    fecha: Date;
}


interface Usuario {
    id: number;
    nombre: string;
    email: string;
    contraseña: string
    historialCambios: CambioUsuario[]
}

function crearUsuario(id: number, nombre: string, email: string, contraseña: string): Usuario {
    return {
        id,
        nombre,
        email,
        contraseña,
        historialCambios: []
    };
}

function registrarCambio(usuario: Usuario, tipo: tipoCambio, valorAnterior: string | null, valorNuevo: string | null): void {
    const nuevoCambio: CambioUsuario = {
        tipo,
        valorAnterior,
        valorNuevo,
        fecha: new Date()
    };
    usuario.historialCambios.push(nuevoCambio);
}

function resumenCambios(usuario: Usuario) {
    const resumen = { nombre: 0, email: 0, contraseña: 0 };

    for (const cambio of usuario.historialCambios) {
        resumen[cambio.tipo]++;
    }

    return resumen;
}

const user = crearUsuario(1, "Cuchurrumi", "cuchu@mail.com", "1234");

registrarCambio(user, "nombre", "Cuchurrumi", "CuchuPower");
registrarCambio(user, "email", "cuchu@mail.com", "cuchu@coffee.com");
registrarCambio(user, "nombre", "CuchuPower", "Cuchurrumi");

console.log(user.historialCambios);
console.log(resumenCambios(user));
