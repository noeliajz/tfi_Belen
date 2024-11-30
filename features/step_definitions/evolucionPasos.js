const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulando un sistema de historia clínica
let historiaClinica = {
  evoluciones: [],
  paciente: {
    id: '1',
    nombre: 'Juan Pérez'
  }
};

// Dado que el médico está en la historia clínica del paciente
Given('el médico con matrícula {string} está en la historia clínica del paciente', function (matricula) {
  this.matricula = matricula;
  // Aquí puedes agregar lógica para obtener la historia clínica de un paciente en el sistema
});

// Cuando el médico ingresa una nueva evolución con los datos proporcionados
When('el médico ingresa una nueva evolución con idMedico {string} y informe {string}', function (idMedico, informe) {
  const evolucion = {
    idMedico: idMedico,
    informe: informe,
    matriculaMedico: this.matricula
  };

  // Simulamos que la evolución se agrega a la historia clínica
  historiaClinica.evoluciones.push(evolucion);
});

// Entonces la evolución debe quedar registrada con los datos esperados
Then('la evolución debe quedar registrada como médico con matrícula {string} y nueva evolución con idMedico {string} y informe {string}', function (matricula, idMedico, informe) {
  const evolucion = historiaClinica.evoluciones.find(e => e.idMedico === idMedico && e.informe === informe);
  
  assert.ok(evolucion, 'La evolución no se ha registrado correctamente.');
  assert.strictEqual(evolucion.matriculaMedico, matricula, `La matrícula del médico debería ser ${matricula}`);
  assert.strictEqual(evolucion.idMedico, idMedico, `El id del médico debería ser ${idMedico}`);
  assert.strictEqual(evolucion.informe, informe, `El informe debería ser "${informe}"`);
});
