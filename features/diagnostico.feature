Feature: Gestión de diagnósticos

  Scenario: Agregar un nuevo diagnóstico en texto libre
    Given el médico con matrícula 43569 está en la pantalla de evoluciones
    When el médico selecciona "Agregar diagnóstico"
    And el médico elige la opción "texto libre"
    When el médico ingresa la descripción "Trastorno metabólico"
    Then el diagnóstico debe guardarse asociado a la evolución actual
