interface UsuarioSistema {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: "admin" | "editor" | "visitante";
}

function filtrarUsuariosValidos(usuarios: UsuarioSistema[]): UsuarioSistema[] {
    return usuarios.filter(
        (usuario) =>
            usuario.edad >= 18 &&
            usuario.activo &&
            usuario.rol !== "visitante"
    );
}

const listaUsuarios: UsuarioSistema[] = [
    { nombre: "Cuchurrumi", edad: 22, activo: true, rol: "admin" },
    { nombre: "Pepe", edad: 16, activo: true, rol: "editor" },
    { nombre: "Laura", edad: 25, activo: false, rol: "editor" },
    { nombre: "Marta", edad: 30, activo: true, rol: "visitante" },
    { nombre: "Sofía", edad: 19, activo: true, rol: "editor" }
];

console.log(filtrarUsuariosValidos(listaUsuarios));
