type NotificacionEmail = {
  tipo: "email";
  destinatario: string;
  asunto: string;
  mensaje: string;
};

type NotificacionSMS = {
  tipo: "sms";
  numero: string;
  contenido: string;
};

type NotificacionPush = {
  tipo: "push";
  dispositivoId: string;
  titulo: string;
  cuerpo: string;
};

type Notificacion = NotificacionEmail | NotificacionSMS | NotificacionPush;

function enviarNotificacion(notificacion: Notificacion): void {
  if (notificacion.tipo === "email") {
    console.log(`Enviando EMAIL a ${notificacion.destinatario}`);
    console.log(`Asunto: ${notificacion.asunto}`);
    console.log(`Mensaje: ${notificacion.mensaje}`);
  } else if (notificacion.tipo === "sms") {
    console.log(`Enviando SMS al número ${notificacion.numero}`);
    console.log(`Contenido: ${notificacion.contenido}`);
  } else if (notificacion.tipo === "push") {
    console.log(`Enviando PUSH a dispositivo ${notificacion.dispositivoId}`);
    console.log(`Título: ${notificacion.titulo}`);
    console.log(`Cuerpo: ${notificacion.cuerpo}`);
  }
}

const notif1: NotificacionEmail = {
  tipo: "email",
  destinatario: "ana@example.com",
  asunto: "Bienvenida",
  mensaje: "Gracias por registrarte"
};

const notif2: NotificacionSMS = {
  tipo: "sms",
  numero: "+573001234567",
  contenido: "Tu código es 1234"
};

const notif3: NotificacionPush = {
  tipo: "push",
  dispositivoId: "ABC123XYZ",
  titulo: "Nueva oferta",
  cuerpo: "Descuento del 50% solo hoy."
};

enviarNotificacion(notif1);
enviarNotificacion(notif2);
enviarNotificacion(notif3);

