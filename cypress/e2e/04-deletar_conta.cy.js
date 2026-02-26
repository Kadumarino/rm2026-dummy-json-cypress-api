/// <reference types="cypress" />

describe('Deletar conta', () => {
    it('Deve deletar uma conta com sucesso', () => {
        cy.deletarConta(1);

    });
});