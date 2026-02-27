# Automação de Testes API - DummyJSON

[![Cypress Tests](https://github.com/Kadumarino/rm2026-dummy-json-cypress-api/actions/workflows/cypress.yml/badge.svg)](https://github.com/Kadumarino/rm2026-dummy-json-cypress-api/actions/workflows/cypress.yml)

## Ferramenta Utilizada

**Cypress 15.10.0** com Faker.js e Mochawesome Reporter

##  Como Executar os Testes

```bash
# Clonar e instalar
git clone https://github.com/Kadumarino/rm2026-dummy-json-cypress-api.git
cd rm2026-dummy-json-cypress-api
npm install
npm init -y
npm install cypress --save-dev
npm install faker
npm install --save-dev cypress-mochawesome-reporter


# Executar testes
npx cypress open
npx cypress run

```

**Relatório:** `cypress/reports/index.html`

##  Estrutura do Projeto

```
cypress/
├── e2e/              # 4 specs de teste (criar, login, editar, deletar)
├── fixtures/         # Dados de teste (auth.json, etc)
└── support/          # Comandos customizados (cy.criarConta, cy.login, etc)
```

##  Estratégia Adotada

**Organização:** 1 spec por funcionalidade para execução paralela no CI/CD

**Dados:** Faker.js gera dados dinâmicos em cada execução

**Evidências:** Screenshots automáticos + relatório HTML consolidado

**CI/CD:** GitHub Actions executa testes em paralelo e gera relatório único

##  Evidência de Execução

**Testes:** 5 passing (01-criar_conta, 02-login x2, 03-editar_conta, 04-deletar_conta)

**Relatório:** `cypress/reports/index.html` (localmente) ou artefato `relatorio-consolidado` no [GitHub Actions](https://github.com/Kadumarino/rm2026-dummy-json-cypress-api/actions)

---

**Autor:** [@Kadumarino](https://github.com/Kadumarino)
