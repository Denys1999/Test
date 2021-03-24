export class LoginPage {

    usernameInput() {
        return cy.get('[name="username"]')
    }

    passwordInput() {
        return cy.get('[name="password"]')
    }

    loginButton() {
        return cy.get('.btn-success');
    }

    errorMessage() {
        return cy.get('.has-error span');
    }

    login(username, password) {
        this.usernameInput().should('be.visible').type(username);
        this.passwordInput().should('be.visible').type(password);
        this.loginButton().should('be.visible').click();
    }

    loginWithEmptyUsername(password) {
        this.passwordInput().should('be.visible').type(password);
        this.loginButton().should('be.visible').click();
    }

    loginWithEmptyPassword(username) {
        this.usernameInput().should('be.visible').type(username);
        this.loginButton().should('be.visible').click();
    }

    validateErrorMessage(message) {
        this.errorMessage().should('be.visible').and('contain.text', message)
    }

    validateErrorMessageNotDisplayed() {
        this.errorMessage().should('not.be.visible');
    }
}

