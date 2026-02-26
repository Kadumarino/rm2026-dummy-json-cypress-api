import { fa } from "@faker-js/faker";

Cypress.Commands.add('deletarConta', (userId) => {
    cy.request({
        method: 'DELETE',
        url: `/users/${userId}`,
        
    }).then((response) => {
        console.log(response);
        expect(response.status, 'Status code deve ser 200').to.eq(200);
        expect(response.statusText, 'Deve conter statusText').to.exist;
        expect(response.body.id, 'Deve conter o ID do usuario').to.exist;
        expect(response.body.isDeleted, 'Campo isDeleted deve ser true').to.eq(true);
        expect(response.body.deletedOn, 'Deve conter data de exclusao').to.exist;
    });
});