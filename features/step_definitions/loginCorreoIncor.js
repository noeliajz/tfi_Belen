const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulación de la función de autenticación
function autenticarUsuario(correo, contraseña) {
  // Simulación de usuarios registrados
  const usuariosRegistrados = [
    { correo: "gerezbelen875@gmail.com", contraseña: "123" }, // Usuario válido
  ];

  const usuario = usuariosRegistrados.find((user) => user.correo === correo);

  if (!usuario) {
    return { success: false, mensaje: "Usuario no encontrado" };
  }

  if (usuario.contraseña !== contraseña) {
    return { success: false, mensaje: "Contraseña incorrecta" };
  }

  return { success: true, mensaje: "Inicio de sesión exitoso" };
}

// Variables para almacenar datos temporales
let correoIngresado;
let contraseñaIngresada;
let resultado;

// Step Definitions
Given('el usuario con correo no registrado {string}', function (correo) {
  correoIngresado = correo;
  console.log(`Correo ingresado: ${correoIngresado}`);
});

When('ingresa una contraseña {string}', function (contraseña) {
  contraseñaIngresada = contraseña;
  console.log(`Contraseña ingresada: ${contraseñaIngresada}`);
});

When('presiona el botón {string}', function (boton) {
  assert.strictEqual(boton, "Iniciar sesión", "El botón no coincide");
  console.log(`Botón presionado: ${boton}`);
  // Llamada a la función de autenticación
  resultado = autenticarUsuario(correoIngresado, contraseñaIngresada);
});

Then('el sistema muestra un mensaje de error {string}', function (mensajeEsperado) {
  assert.strictEqual(resultado.success, false, "El login no debería ser exitoso");
  assert.strictEqual(resultado.mensaje, mensajeEsperado, "El mensaje de error no coincide");
  console.log(`Mensaje mostrado: ${resultado.mensaje}`);
});
