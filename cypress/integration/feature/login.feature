Feature: Login

    Acessando o login da Amazon

 Scenario: Efetuando login no site da Amazon
    Given Estou logado no site amazon
    And Busco pelo curso java
    When  Existe o curso
    Then  Curso comprado 