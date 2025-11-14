class LoginPage {
    elements = {
        successMessage: () => cy.contains('Secure Area'),
        errorMessage: () => cy.get('#flash')
    };

    login(username, password) {
        this.elements.username().type(username);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
    }
}

module.exports = new LoginPage();