import {LoginPage} from '../page-objects/login-page.po'

describe('Validate login page', () => {

  const configVariables = Cypress.env();
  const loginPage = new LoginPage();

  beforeEach( () => {
    cy.visit('');
  })

  it('Enter invalid data', () => {
    loginPage.login(configVariables.username, configVariables.password);
    loginPage.validateErrorMessage('The password you entered was not valid.')
  });

  it('Enter only username', () => {
    loginPage.loginWithEmptyPassword(configVariables.username)
    loginPage.validateErrorMessage('Please enter your password.')
  });

  it('Enter only password', () => {
    loginPage.loginWithEmptyUsername(configVariables.password)
    loginPage.validateErrorMessage('Please enter username.')
  });

  it('Enter valid data', () => {
    loginPage.login(configVariables.username, configVariables.password);
    loginPage.validateErrorMessageNotDisplayed();
  });
});
