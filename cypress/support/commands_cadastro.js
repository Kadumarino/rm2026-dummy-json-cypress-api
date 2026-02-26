import { faker } from '@faker-js/faker';

Cypress.Commands.add('criarConta', (nome, email, senha) => {
    cy.request({
        method: 'POST',
        url: '/users/add',
        body: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            age: faker.number.int({ min: 18, max: 99 }),
            email: faker.internet.email()
        }
    }).then((response) => {
        console.log(response);
        expect(response.status, 'Status code deve ser 201').to.eq(201);
        expect(response.body.firstName, 'Deve conter firstName').to.exist;
        expect(response.body.lastName, 'Deve conter lastName').to.exist;
        expect(response.body.age, 'Deve conter age').to.exist;
        expect(response.body.email, 'Deve conter email').to.exist;
        expect(parseInt(response.body.id), 'ID deve ser um numero').to.be.a('number');
        expect(response.body.role, 'Deve conter role').to.exist;
            
    });
});
