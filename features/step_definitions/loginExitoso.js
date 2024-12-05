const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Variables simuladas para la autenticación
let usuarioEnLogin = false;
let correoIngresado;
let contrasenaIngresada;

// Datos simulados para validación (esto sería un sistema real de autenticación)
const usuariosValidos = {
  'gerezbelen875@gmail.com': '123'
};

// Paso Given: El usuario está en la página de login
Given('el usuario está en la página de login', function () {
  usuarioEnLogin = false;  // Inicializamos como no autenticado
  console.log("El usuario ha llegado a la página de login");
});

// Paso When: El usuario ingresa su correo y contraseña
When('el usuario ingresa su correo {string} y contraseña {string}', function (correo, contrasena) {
  correoIngresado = correo;
  contrasenaIngresada = contrasena;
  console.log(`Correo ingresado: ${correoIngresado}, Contraseña ingresada: ${contrasenaIngresada}`);

  // Simulamos el proceso de autenticación
  if (usuariosValidos[correoIngresado] === contrasenaIngresada) {
    usuarioEnLogin = true;  // Login exitoso
  } else {
    usuarioEnLogin = false; // Login fallido
  }
});

// Paso Then: El usuario debe ser redirigido a la página principal
Then('el usuario debe ser redirigido a la página principal', function () {
  // Verificamos que el login haya sido exitoso
  assert.strictEqual(usuarioEnLogin, true, 'El login no fue exitoso');
  console.log('El login fue exitoso, el usuario ha sido redirigido a la página principal');
});
