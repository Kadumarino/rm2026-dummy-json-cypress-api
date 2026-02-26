import { faker } from "@faker-js/faker";

faker.locale = "pt_BR";

Cypress.Commands.add("editarConta", () => {
  cy.fixture("auth").then((auth) => {
    const authData = auth[0];
    cy.request({
      method: "PUT",
      url: "/users/id",
      body: {
        id: 200,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        maidenName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 99 }),
        gender: faker.person.gender(),
        email: faker.internet.email(),
        phone: faker.phone.number("+55 11 #####-####"),
        username: authData.username,
        password: authData.password,
        birthDate: faker.date.birthdate({ min: 18, max: 99, mode: "age" }),
        image: faker.image.avatar(),
        },

    }).then((response) => {
        console.log(response);
        expect(response.status, 'Status code deve ser 200').to.eq(200);
        expect(response.body.firstName, 'Deve conter firstName').to.exist;
        expect(response.body.lastName, 'Deve conter lastName').to.exist;
        expect(response.body.maidenName, 'Deve conter maidenName').to.exist;
        expect(response.body.age, 'Deve conter age').to.exist;
        expect(response.body.gender, 'Deve conter gender').to.exist;
        expect(response.body.email, 'Deve conter email').to.exist;
        expect(response.body.phone, 'Deve conter phone').to.exist;
        expect(response.body.username, 'Deve conter username').to.exist;
        expect(response.body.password, 'Deve conter password').to.exist;
        expect(response.body.birthDate, 'Deve conter birthDate').to.exist;
        expect(response.body.image, 'Deve conter image').to.exist;

    });
    });
  });
