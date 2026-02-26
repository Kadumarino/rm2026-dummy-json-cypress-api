
import 'cypress-mochawesome-reporter/register';

import './commands_cadastro'
import './commands_login'
import './commands_editar_conta'
import './commands_deletar_conta'

// Capturar screenshot de todos os testes para aparecer no relatorio
afterEach(function() {
  const testName = this.currentTest.title.replace(/[^a-z0-9]/gi, '_');
  const status = this.currentTest.state === 'passed' ? 'PASSOU' : 'FALHOU';
  
  cy.screenshot(`${status}-${testName}`, { 
    capture: 'runner',
    overwrite: true 
  });
});