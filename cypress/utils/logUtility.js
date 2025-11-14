class Logger {
    static info(message) {
        cy.log(`INFO: ${message}`);
        console.log(`INFO: ${message}`);
    }

     static error(message) {
        cy.log(`ERROR: ${message}`);
        console.error(`ERROR: ${message}`);
    }
}   
export default Logger;