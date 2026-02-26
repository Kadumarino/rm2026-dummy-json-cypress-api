Cypress.Commands.add("login", () => {
  cy.fixture("auth").then((auth) => {
    const usuarioValido = auth[0];
    cy.request({
      method: "POST",
      url: "/auth/login",
      body: {
        username: usuarioValido.username,
        password: usuarioValido.password,
      },
    }).then((response) => {
      console.log(response);
      expect(response.status, 'Status code deve ser 200').to.eq(200);
      expect(response.body.accessToken, 'Deve retornar accessToken').to.exist;
    });
  });
});

Cypress.Commands.add("loginInvalido", () => {
  cy.fixture("auth").then((auth) => {
    const usuarioInvalido = auth[1];
    cy.request({
      method: "POST",
      url: "/auth/login",
      body: {
        username: usuarioInvalido.username,
        password: usuarioInvalido.password,
      },
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status, 'Status code deve ser 400 para login invalido').to.eq(400);
      expect(response.body.accessToken, 'Nao deve retornar accessToken').to.not.exist;
    });
  });
});
