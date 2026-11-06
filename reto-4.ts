interface RespuestaServidor {
  status: 'success' | 'error';
  data?: string[];
  mensajeError?: string;
}

function procesarRespuesta(res: RespuestaServidor): void {
  if (res.status === 'success') {
    if (res.data !== undefined) {
      res.data.forEach(function (dato) {
        console.log(dato);
      });
    }
  } else {
    if (res.mensajeError !== undefined) {
      console.log(res.mensajeError);
    }
  }
}
