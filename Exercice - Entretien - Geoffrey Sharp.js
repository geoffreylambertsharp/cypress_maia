describe('Exercice - Cypress - Maïa', function() {

 it('Création rendez-vous', function() {

    cy.viewport(1280, 697)

    cy.visit('https://www.staging.maiia.com/')

    cy.get('.submit').click()

    //cy.get('input').invoke('attr', 'placeholder').should('contain', 'Spécialité, praticien, établissement').type('Test QA')

    //cy.get('input#downshift_input_4.input-field').type('Test QA')

    //cy.contains("Spécialité, praticien, établissement").type('Test QATECHNIQUE')

    cy.get('div.suggestion').type('Test QA')

 })

})
