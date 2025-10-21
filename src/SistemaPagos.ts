type Pago =
  | { metodo: "tarjeta"; numeroTarjeta: string; cvv: string }
  | { metodo: "transferencia"; banco: string; numeroCuenta: string }
  | { metodo: "efectivo" };

function validarPago(pago: Pago): boolean {
  switch (pago.metodo) {
    case "tarjeta":
      if (!pago.numeroTarjeta || !pago.cvv) {
        console.log("Faltan datos de la tarjeta.");
        return false;
      }
      console.log("Pago con tarjeta válido.");
      return true;

    case "transferencia":
      if (!pago.banco || !pago.numeroCuenta) {
        console.log("Faltan datos de la transferencia.");
        return false;
      }
      console.log("Pago por transferencia válido.");
      return true;

    case "efectivo":
      console.log("Pago en efectivo válido (no requiere datos adicionales).");
      return true;

    default:
      console.log("Método de pago no reconocido.");
      return false;
  }
}

const pago1: Pago = { metodo: "tarjeta", numeroTarjeta: "1234567890123456", cvv: "123" };
const pago2: Pago = { metodo: "transferencia", banco: "Banco Central", numeroCuenta: "987654321" };
const pago3: Pago = { metodo: "efectivo" };

validarPago(pago1);
validarPago(pago2);
validarPago(pago3);