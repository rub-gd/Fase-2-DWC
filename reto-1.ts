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

