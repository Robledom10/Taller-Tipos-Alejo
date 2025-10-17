interface CampoFormulario {
    nombre: string;
    tipo: "Text" | "Num" | "Email";
    valor: string | number;
}

function validarCampos(campos: CampoFormulario[]): string[] {
  const camposInvalidos: string[] = [];

  campos.forEach((campo) => {
    if (campo.tipo === "Text") {
      if (typeof campo.valor !== "string" || campo.valor.trim() === "") {
        camposInvalidos.push(campo.nombre);
      }
    }

    if (campo.tipo === "Num") {
      if (typeof campo.valor !== "number" || isNaN(campo.valor)) {
        camposInvalidos.push(campo.nombre);
      }
    }


    if (campo.tipo === "Email") {
      if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
        camposInvalidos.push(campo.nombre);
      }
    }
  });

  return camposInvalidos;
}
