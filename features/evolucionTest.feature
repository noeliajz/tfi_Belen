Feature: Evoluciones médicas

Scenario: Seleccionar "Agregar evolución"
  Given El médico con matrícula "1234" está logueado
  When El médico selecciona la opción "Agregar evolución" con ID de evolución "12", fecha "11/09/2024 10:08:32", y descripción "etapa inicial"
  Then El agrega la nueva evolucion del paciente