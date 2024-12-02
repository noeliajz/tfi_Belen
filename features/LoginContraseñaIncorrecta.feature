Scenario: Login fallido con contraseña incorrecta
    Given el usuario está en la página de login
    When el usuario ingresa su correo "usuario@dominio.com" y contraseña "incorrecta123"
    Then el mensaje de error "Correo o contraseña incorrectos" debe ser mostrado