# Retos prácticos de TypeScript
   Ejercicios para practicar los fundamentos de TypeScript y la programación orientada a objetos con cinco retos sobre interfaces, arrays, clases, control de errores y herencia.

## ¿Qué necesito?
   -Visual Studio Code.
   -Un navegador web.
   -El compilador de TypeScript, tsc, en la terminal.

## ¿Qué hay en cada archivo?
   -src/app.ts: Código TypeScript de los cinco retos y ejemplos para comprobarlos.
   -dist/app.js: JavaScript que se genera al compilar. No hace falta escribirlo a mano.
   -index.html: Página que carga el JavaScript generado.
   -tsconfig.json: Configuración que indica a TypeScript cómo compilar el proyecto.

## Cómo compilar
   1 Abre en Visual Studio Code la carpeta del proyecto.
   2 Comprueba que está el archivo tsconfig.json correctamente configurado.
   3 Abre una terminal desde.
   4 Escribe tsc y pulsa Enter.

   Si se complila bien, se generará o actualizará dist/app.js.

## Cómo ver los resultados
   Después de compilar, abre index.html en el navegador. Usa la extensión Live Server de Visual Studio Code: haz clic derecho en index.html y selecciona Open with Live Server. Los resultados se muestran en la consola del navegador.

## Retos incluidos
   1 Interfaz UsuarioAPI con roles permitidos y un token no obligatorio.
   2 Interfaz Tarea y función completarTarea, que da una lista nueva.
   3 Clase ProductComponent, tiene un precio base privado y un método para calcular el precio con IVA.
   4 Interfaz RespuestaServidor y función para procesar respuestas de éxito o error.
   5 Clases ServicioDatos y ServicioUsuarios, que utiliza `super()` para llamar al constructor de la clase base.

   Al final de app.ts hay comprobaciones para ver si todo está correctamente hecho o no.

## Nota sobre el rol no permitido
   El reto 1 pide probar que TypeScript no acepta otro rol que no sea uno de los que se establecen. En el archivo, esa prueba parte está comentada para que se pueda sin errores. Para ver que realmente marca el error con descomentar la línea TypeScript ya la marcará como error, pero si va a seguir mirando más cosas, vuelva a comentarla por si necesita compilar para que funcione correctamente la compilación.