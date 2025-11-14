const LoginPage = require('../../pages/loginPage');
import loginData from '../../fixtures/loginData.json';
import logs from '../../utils/logUtility';

describe('Login Success Test', () => {
    it('User should login successfully', () => {
        logs.info('Navigating to login page');
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        logs.info('Login attempted with valid credentials');

        LoginPage.elements.successMessage().should('be.visible');
        logs.info('Login successful, success message is visible');
    });

// capturing ss
    afterEach(() => {
        cy.screenshot();
    });
});
