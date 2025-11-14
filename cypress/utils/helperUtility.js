class WaitUtils {
    static waitForElement(element, timeout = 5000) {
        element.should('be.visible', { timeout });
    }

    static wait(seconds) {
        cy.wait(seconds * 1000);
    }
}

module.exports = WaitUtils;
