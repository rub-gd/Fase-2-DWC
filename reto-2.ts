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
