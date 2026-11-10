const usuarioValido = {
    id: 1,
    username: 'Rubén',
    email: 'ruben@example.com',
    rol: 'alumno',
};
const usuarioNoValido = {
    id: 2,
    username: 'Manu',
    email: 'manu@example.com',
    //rol: 'invitado', esto es parte de la actividad 1, pero si no se comenta no se puede compilar.
    rol: 'editor',
};
const misTareas = [
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
function completarTarea(lista, idBuscar) {
    const listaNueva = lista.map(function (tarea) {
        if (tarea.id === idBuscar) {
            return { ...tarea, completada: true };
        }
        return tarea;
    });
    return listaNueva;
}
class ProductComponent {
    nombreProducto;
    precioBase;
    iva = 0.21;
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
    }
    obtenerPrecioFinal() {
        const precioDelIva = this.precioBase * this.iva;
        return this.precioBase + precioDelIva;
    }
}
const producto = new ProductComponent('Pila', 78);
console.log(producto.nombreProducto);
console.log(producto.obtenerPrecioFinal());
function procesarRespuesta(res) {
    if (res.status === 'success') {
        if (res.data !== undefined) {
            res.data.forEach(function (dato) {
                console.log(dato);
            });
        }
    }
    else {
        if (res.mensajeError !== undefined) {
            console.log(res.mensajeError);
        }
    }
}
class ServicioDatos {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    conectar() {
        console.log('Conectando a ' + this.endpoint);
    }
}
class ServicioUsuarios extends ServicioDatos {
    entidad = 'usuarios';
    constructor(endpoint) {
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
export {};
//# sourceMappingURL=app.js.map