const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Variables simuladas (esto normalmente será una base de datos o una lógica de aplicación)
let medico;
let evolucion = { diagnosticos: [] };

// Paso Given: El médico está en la pantalla de evoluciones
Given('el médico con matrícula {int} está en la pantalla de evoluciones', function (matricula) {
  medico = { matricula: matricula }; // Guardamos el médico en una variable simulada
  console.log(`Médico con matrícula ${matricula} en pantalla de evoluciones.`);
});

// Paso When: El médico selecciona "Agregar diagnóstico"
When('el médico selecciona "Agregar diagnóstico"', function () {
  console.log("El médico ha seleccionado 'Agregar diagnóstico'.");
  // Simulamos la acción de agregar diagnóstico
});

// Paso When: El médico elige la opción "texto libre"
When('el médico elige la opción "texto libre"', function () {
  console.log("El médico ha elegido la opción 'texto libre'.");
  // Aquí puedes simular la acción de elegir una opción (texto libre)
});

// Paso When: El médico ingresa la descripción "Trastorno metabólico"
When('el médico ingresa la descripción {string}', function (descripcion) {
  console.log(`Descripción ingresada: ${descripcion}`);
  // Simulamos el registro del diagnóstico
  evolucion.diagnosticos.push({ descripcion: descripcion, tipo: 'texto libre' });
});

// Paso Then: El diagnóstico debe guardarse asociado a la evolución actual
Then('el diagnóstico debe guardarse asociado a la evolución actual', function () {
  // Verificamos que el diagnóstico se haya guardado en la evolución
  assert.strictEqual(evolucion.diagnosticos.length, 1, 'El diagnóstico no ha sido guardado');
  assert.strictEqual(evolucion.diagnosticos[0].descripcion, 'Trastorno metabólico', 'La descripción no coincide');
  console.log('El diagnóstico se ha guardado correctamente asociado a la evolución.');
});
