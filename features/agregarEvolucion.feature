Feature: Evolución médica

  Scenario: Agregar una nueva evolución
    Given el médico con matrícula '1234' está en la historia clínica del paciente
    When el médico ingresa una nueva evolución con idMedico '1' y informe "tiene fiebre"
    Then la evolución debe quedar registrada como médico con matrícula '1234' y nueva evolución con idMedico '1' y informe "tiene fiebre"
