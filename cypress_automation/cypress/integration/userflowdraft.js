describe('draft_test', function () {
    const email = new Date().getTime();
    const incoming_mailbox = `test+${email}@gmail.com`;
    const password = `test+${email}`; 

    
  


    it('Publish edited template', function () {

        cy.visit('https://editor.zyro.com/')
        cy.get('[data-qa=builder-btn-publishsite]').click()
        cy.get ('#email').should('be.visible')
        cy.get ('#email').type(incoming_mailbox)
        cy.get('[data-qa="auth-submit-button"]').click()
        cy.get ('#password').type(password)
        cy.get ('#name').type(password)
        cy.get('[data-qa="auth-submit-button"]').click()

    
    });

});