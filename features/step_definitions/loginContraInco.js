const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulación de la función de validación de contraseña
function validarContraseña(correo, contraseña) {
  const usuarios = [
    { correo: "gerezbelen875@gmail.com", contraseña: "123" }, // Usuario válido
  ];

  const usuario = usuarios.find((user) => user.correo === correo);

  if (!usuario) {
    return { success: false, mensaje: "Usuario no encontrado" };
  }

  if (usuario.contraseña !== contraseña) {
    return { success: false, mensaje: "contraseña incorrecta" };
  }

  return { success: true, mensaje: "Login exitoso" };
}

// Variables para almacenar datos del escenario
let correoIngresado;
let contraseñaIngresada;
let resultado;

Given('el usuario con correo {string}', function (correo) {
  correoIngresado = correo; // Simula que el usuario está identificado por correo
});

When('el usuario ingresa su contraseña {string}', function (contraseña) {
  contraseñaIngresada = contraseña; // Captura la contraseña ingresada
  resultado = validarContraseña(correoIngresado, contraseñaIngresada); // Llama a la función de validación
});

Then('el sistema debe mostrar un mensaje de error {string}', function (mensajeEsperado) {
  assert.strictEqual(resultado.success, false); // Verifica que el login haya fallado
  assert.strictEqual(resultado.mensaje, mensajeEsperado); // Verifica el mensaje de error
});
