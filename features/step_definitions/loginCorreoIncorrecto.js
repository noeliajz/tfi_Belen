const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Variables simuladas para la autenticación
let usuarioEnLogin = false;
let correoIngresado;
let contrasenaIngresada;
let mensajeError;

// Datos simulados para validación
const usuariosValidos = {
  'usuario@dominio.com': 'contraseña123'
};

// Paso Given: El usuario está en la página de login
Given('el usuario está en la página de login', function () {
  usuarioEnLogin = false; // Inicializamos como no autenticado
  mensajeError = '';      // Inicializamos el mensaje de error vacío
  console.log('El usuario ha llegado a la página de login');
});

// Paso When: El usuario ingresa su correo y contraseña
When('el usuario ingresa su correo {string} y contraseña {string}', function (correo, contrasena) {
  correoIngresado = correo;
  contrasenaIngresada = contrasena;
  console.log(`Correo ingresado: ${correoIngresado}, Contraseña ingresada: ${contrasenaIngresada}`);

  // Simulamos el proceso de autenticación
  if (!usuariosValidos[correoIngresado] || usuariosValidos[correoIngresado] !== contrasenaIngresada) {
    mensajeError = 'Correo o contraseña incorrectos'; // Error para correo o contraseña inválidos
    usuarioEnLogin = false;
  } else {
    usuarioEnLogin = true; // Login exitoso
  }
});

// Paso Then: El mensaje de error debe ser mostrado
Then('el mensaje de error {string} debe ser mostrado', function (mensajeEsperado) {
  // Verificamos que el mensaje de error sea el esperado
  assert.strictEqual(mensajeError, mensajeEsperado, 'El mensaje de error no coincide con lo esperado');
  console.log(`Mensaje de error mostrado: "${mensajeError}"`);
});
