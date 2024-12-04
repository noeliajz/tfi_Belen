const { Given, When, Then } = require('@cucumber/cucumber');

// Datos simulados
let medico = null;
let evolucion = null;

Given('El médico con matrícula {string} está logueado', function (matricula) {
  // Simula el login del médico
  medico = { matricula };
  console.log(`Médico con matrícula ${matricula} está logueado.`);
});

When('El médico selecciona la opción {string} con ID de evolución {string}, fecha {string}, y descripción {string}', function (accion, idEvolucion, fecha, descripcion) {
  // Simula la selección de la opción "Agregar evolución"
  evolucion = { idEvolucion, fecha, descripcion, diagnostico: "Diagnóstico inicial", receta: "Receta adjunta" };
  console.log(`Médico selecciona ${accion} con ID de evolución ${idEvolucion}, fecha ${fecha} y descripción ${descripcion}.`);
});

Then('El sistema debe asociar la nueva evolución con el diagnóstico', function () {
  const evolucion = obtenerEvolucionPorId('2');
  const diagnosticoAsociado = evolucion.diagnostico;

  if (diagnosticoAsociado) {
      console.log(`Diagnóstico asociado a la evolución con ID 2: ${diagnosticoAsociado}`);
      return true;
  } else {
      throw new Error('El diagnóstico no fue asociado correctamente.');
  }
});

