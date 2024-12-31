const nombre = prompt('Introduce tu nombre: ');
const apellido = prompt('Introduce tu apellido: ');
let edad = prompt('Introduce tu edad: ');
let restando = prompt('¿Cuántos años deseas quitarte? ');

edad -= restando;

document.write('<p>');
document.write(
  'Bienvenido ' +
    nombre +
    ' ' +
    apellido +
    '<br>' +
    'Tu edad es de ' +
    edad +
    ' años'
);
document.write('</p>');
