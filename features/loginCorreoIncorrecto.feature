Scenario: Login fallido con correo incorrecto
    Given el usuario está en la página de login
    When el usuario ingresa su correo "incorrecto@dominio.com" y contraseña "contraseña123"
    Then el mensaje de error "Correo o contraseña incorrectos" debe ser mostrado

  