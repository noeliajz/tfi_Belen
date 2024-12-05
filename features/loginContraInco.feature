Feature: Login

  Scenario: Login fallido contraseña incorrecta
    Given el usuario con correo "gerezbelen875@gmail.com"
    When el usuario ingresa su contraseña "124"
    Then el sistema debe mostrar un mensaje de error "contraseña incorrecta"
