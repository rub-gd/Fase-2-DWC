class ServicioDatos {
  public endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public conectar(): void {
    console.log('Conectando a ' + this.endpoint);
  }
}

class ServicioUsuarios extends ServicioDatos {
  public entidad: string = 'usuarios';

  constructor(endpoint: string) {
    super(endpoint);
  }
}
