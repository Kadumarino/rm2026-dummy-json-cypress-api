/// <reference types="cypress" />

describe('Login', () => {
  it('Deve fazer login com sucesso', () => {
        cy.login()

  });

    it('Deve falhar ao fazer login com credenciais inválidas', () => {
        cy.loginInvalido()
    });
});