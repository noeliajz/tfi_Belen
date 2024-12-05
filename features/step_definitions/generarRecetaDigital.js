const { Given, When, Then, And } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulación del estado de la receta
let descripcionReceta, dosisReceta, medicamentoReceta;
let recetaGenerada = false;
let mensajeExito = "";

// Función que simula la generación de la receta digital
function generarRecetaDigital(descripcion, dosis, medicamento) {
  if (descripcion && dosis && medicamento) {
    recetaGenerada = true;
    mensajeExito = "Receta generada correctamente";
    return { success: true, mensaje: mensajeExito };
  }
  return { success: false, mensaje: "Faltan datos para generar la receta" };
}

Given('un médico ha registrado la descripción {string}, la dosis {string} y el medicamento {string}', function (descripcion, dosis, medicamento) {
  // Asigna los valores de la receta a las variables
  descripcionReceta = descripcion;
  dosisReceta = dosis;
  medicamentoReceta = medicamento;

  console.log(`Datos registrados: Descripción: ${descripcionReceta}, Dosis: ${dosisReceta}, Medicamento: ${medicamentoReceta}`);
});

When('el médico presiona el botón {string}', function (boton) {
  // Verifica que el botón presionado sea el correcto
  assert.strictEqual(boton, "generar receta digital", "El botón presionado no es el esperado.");
  console.log(`Botón presionado: ${boton}`);
});

Then('el sistema debe generar la receta digital con los datos proporcionados', function () {
  // Genera la receta digital con los datos proporcionados
  const resultado = generarRecetaDigital(descripcionReceta, dosisReceta, medicamentoReceta);
  
  // Verifica que la receta se haya generado correctamente
  assert.strictEqual(resultado.success, true, "La receta no se generó correctamente.");
  console.log(`Receta generada con éxito: ${resultado.mensaje}`);
});

When('el sistema debe mostrar un mensaje de éxito {string}', function (mensajeEsperado) {
  // Verifica que el mensaje de éxito sea el esperado
  assert.strictEqual(mensajeExito, mensajeEsperado, `Se esperaba el mensaje: ${mensajeEsperado}, pero se recibió: ${mensajeExito}`);
});
