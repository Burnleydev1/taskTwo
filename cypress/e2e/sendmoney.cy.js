describe('Send Money', () => {
    it('passes', () => {
        cy.visit('https://adminbom.smobilpay.integration.maviance.info/remittance_send?filter=')
        cy.get('.ra-input-sender').type("Abongwa")
        cy.get('.ra-input-password').type("1234Web*")
        cy.get('.MuiButton-root').click()
        // cy.get('.ra-input-username').contains('vbwebagent')
    })
})