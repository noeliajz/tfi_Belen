Feature: Evoluciones médicas

Scenario: Agregar evolución exitosamente
  Given El médico con matrícula "1234" está logueado
  When ingresa el id de doctor "1"
  And agrega una observacion "Tiene fiebre"
  And presiono el boton "agregar evolucion"
  Then se agrega la evolucion exitosamente
