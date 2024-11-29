const { Given, When, Then } = require('@cucumber/cucumber');

let paciente = {};
let medico = {};
let evolucion = {};

Given('el médico con matrícula {int} está en la historia clínica del paciente', function (matricula) {
  this.medico = { matricula: matricula, nombre: 'Martina Gerez' };
  this.paciente = { dni: '43203765', nombreCompleto: 'Belen Gerez', fechaNacimiento: '1990-05-12', NroAfiliado:'A123' };
  console.log(`Médico con matrícula ${matricula} está accediendo a la historia clínica.`);
});

When('el médico ingresa una nueva evolución con idMedico {int} y informe {string}', function (idMedico, informe) {
  this.evolucion = {
    idMedico: idMedico,
    informe: informe,
    medico: medico
  };
  console.log(`Evolución registrada con el informe: "${informe}"`);
});
// tercer paso falla

Then('la evolución debe quedar registrada como médico con matrícula {string} y nueva evolución con idMedico {int} y informe {string}', function (
  matriculaMedico,
  idMedico,
  informe
) {
  // Verificar que los datos de la evolución coinciden con los datos esperados
  if (
    this.evolucion.medico.matricula === matriculaMedico &&   // Compara matrícula del médico
    this.evolucion.idMedico === idMedico &&                  // Compara idMedico
    this.evolucion.informe === informe                       // Compara el informe
  ) {
    console.log('La evolución fue registrada correctamente.');
  } else {
    throw new Error('Los datos de la evolución no coinciden con los datos esperados.');
  }
});
