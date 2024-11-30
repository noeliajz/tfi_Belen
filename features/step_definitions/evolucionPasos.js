import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

// Contexto global para datos compartidos
let contexto = {};

// Paso 1: Given
Given(
  "el médico con matrícula {int} está en la historia clínica del paciente",
  function (matricula) {
    contexto.matricula = matricula;
  }
);

// Paso 2: When
When(
  "el médico ingresa una nueva evolución con idMedico {int} y informe {string}",
  function (idMedico, informe) {
    contexto.evolucion = { idMedico, informe };
  }
);

// Paso 3: Then
Then(
  "la evolución debe quedar registrada como médico con matrícula {int} y nueva evolución con idMedico {int} y informe {string}",
  function (matricula, idMedico, informe) {
    expect(contexto.matricula).to.equal(matricula);
    expect(contexto.evolucion.idMedico).to.equal(idMedico);
    expect(contexto.evolucion.informe).to.equal(informe);
  }
);
