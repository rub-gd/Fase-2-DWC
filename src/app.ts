// ==========================  Reto 1 ==========================
interface UsuarioAPI {
  id: number;
  username: string;
  email: string;
  rol: 'admin' | 'editor' | 'alumno';
  token?: string;
}

const usuarioValido: UsuarioAPI = {
  id: 1,
  username: 'Rubén',
  email: 'ruben@example.com',
  rol: 'alumno',
};

const usuarioNoValido: UsuarioAPI = {
  id: 2,
  username: 'Manu',
  email: 'manu@example.com',
 //rol: 'invitado', esto es parte de la actividad 1, pero si no se comenta no se puede compilar.
 rol: 'editor', 
};

// ==========================  Reto 2 ==========================
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  prioridad: 'Alta' | 'Media' | 'Baja';
  fechaEntrega?: string;
}

const misTareas: Tarea[] = [
  {
    id: 1,
    titulo: 'Estudia dibujo técnico.',
    completada: false,
    prioridad: 'Alta',
  },
  {
    id: 2,
    titulo: 'Hacer deberes de biología.',
    completada: false,
    prioridad: 'Baja',
  },
  {
    id: 3,
    titulo: 'Estudiar matemáticas.',
    completada: false,
    prioridad: 'Media',
  },
];

function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {
  const listaNueva = lista.map(function (tarea) {
    if (tarea.id === idBuscar) {
      return { ...tarea, completada: true };
    }
        return tarea;
  });
    return listaNueva;
}

// ==========================  Reto 3 ==========================
class ProductComponent {
  private iva: number = 0.21;

  constructor(public nombreProducto: string, private precioBase: number) {}

  public obtenerPrecioFinal(): number {
    const precioDelIva = this.precioBase * this.iva;
    return this.precioBase + precioDelIva;
  }
}

const producto = new ProductComponent('Pila', 78);

console.log(producto.nombreProducto);
console.log(producto.obtenerPrecioFinal());

// ==========================  Reto 4 ==========================
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

// ==========================  Reto 5 ==========================
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

console.log('Usuario válido:', usuarioValido);

const tareasCompletadas = completarTarea(misTareas, 2);
console.log('Tareas originales:', misTareas);
console.log('Tareas después de completar la tarea 2:', tareasCompletadas);

procesarRespuesta({
  status: 'success',
  data: ['dato1', 'dato2', 'dato3'],
});

procesarRespuesta({
  status: 'error',
  mensajeError: 'No se pudieron cargar los datos.',
});

const servicioUsuarios = new ServicioUsuarios('/api/usuarios');
console.log('Entidad del servicio:', servicioUsuarios.entidad);
servicioUsuarios.conectar();