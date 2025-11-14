// const LoginPage = require('../../pages/loginPage');
import loginData from '../../fixtures/loginData.json';
import LoginPage from '../../pages/loginPage';

describe('Login Failure Test', () => {
    it('Should show error message for invalid login', () => {
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );

        LoginPage.elements.errorMessage()
            .should('contain', 'Your username is invalid!');
    });


    // capturing ss
    afterEach(() => {
        cy.screenshot();
    });
});
