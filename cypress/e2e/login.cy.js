describe('Login', () => {
  it('passes', () => {
    cy.visit('https://adminbom.smobilpay.integration.maviance.info/')
    cy.get('.ra-input-username').type("vbwebagent")
    cy.get('.ra-input-password').type("1234Web*")
    cy.get('.MuiButton-root').click()

    cy.get('.MuiMenuItem-root').contains('Send').click()
    cy.get('.ra-input').contains("Sender Sends").type(20000)
    cy.get('[for="country-select-demo"]').click()
  })
})