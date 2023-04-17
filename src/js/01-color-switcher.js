'use strict';

// Selector para el botón de inicio
const btnStart = document.querySelector('[data-start]');
// Selector para el botón de detención
const btnStop = document.querySelector('[data-stop]');
// Variable para almacenar el ID del temporizador
let timerId = null;

/**
 * Función para generar un color hexadecimal aleatorio
 * @returns {string} - Un color hexadecimal aleatorio
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/**
 * Función para cambiar el color de fondo del body y deshabilitar el botón de inicio
 */
function switchColor() {
  // Cambiar el color de fondo del body
  document.body.style.backgroundColor = getRandomHexColor();
  // Llamar a la función switchColor() nuevamente después de 1 segundo (1000 milisegundos)
  timerId = setTimeout(switchColor, 1000);
  // Deshabilitar el botón de inicio y habilitar el botón de detención
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
}

/**
 * Función para detener el cambio de color y habilitar el botón de inicio
 */
function stopColor() {
  // Limpiar el temporizador utilizando el ID almacenado en timerId
  clearTimeout(timerId);
  // Habilitar el botón de inicio y deshabilitar el botón de detención
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);
}

// Agregar un evento de clic al botón de inicio para llamar a la función switchColor()
btnStart.addEventListener('click', switchColor);
// Agregar un evento de clic al botón de detención para llamar a la función stopColor()
btnStop.addEventListener('click', stopColor);

