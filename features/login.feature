Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the app with correct data
    Given I am on the login page
    When I enter 23237927389 and _Adrian_50_
    Then I should be in the page main

  Scenario: As a user, I can not log into the app with incorrect password
    Given I am on the login page
    When I enter 23237927389 and pass1234
    Then I should see a login error saying El CUIT o la Clave CIM ingresados no son válidos. Por favor reintente.

  Scenario: As a user, I receive a message when CUIT is invalid
    Given I am on the login page
    When I enter 23237927381 and pass1234
    Then I should see a cuit error saying El CUIT es invalido!

  Scenario Outline: As a user, I receive a message when password is empty
    Given I am on the login page
    When I enter 23237927389 and <password>    
    Then I should see a password error saying Debe ingresar la Contraseña

    Examples:
      | password |
      |          |