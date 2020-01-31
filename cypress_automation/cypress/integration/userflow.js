describe('userflow', function () {
    const builder='https://zyro.com/'
    const email = new Date().getTime();
    const incoming_mailbox = `test+${email}@gmail.com`;
    const password = `test+${email}`;
    
       
    it('should open the main page', function () {
        cy.visit(builder)  //add to be executed before each test
        cy.get('[data-qa="homepage-btn-startforfree"]').should('be.visible')

    });

    it('Open template list', function () {
        cy.visit(builder)
        cy.get('[data-qa="homepage-btn-startforfree"]').should('be.visible')
        cy.get('[data-qa="homepage-btn-startforfree"]').click()

    });


  it('Publish edited template', function () {
    cy.visit(builder)
    cy.get('[data-qa="homepage-btn-startforfree"]').should('be.visible')
    cy.get('[data-qa="homepage-btn-startforfree"]').click()
    cy.get('[data-qa=choosetemplate-btn-startbuilding]').first().should('be.visible')
    cy.get('[data-qa="template-hover-state"]').first().invoke('show')
    cy.get('button[data-qa=choosetemplate-btn-startbuilding]').first().invoke('show').click({ force: true }) //can't find how to un-hover button, 
    cy.get('#app > div > div > div.app-main__column-main.app-main__column-main--sidebar-open > div > div > section > section:nth-child(2) > div.block-grid > div.block-grid-item.block-grid__item.is-current.is-movable > div > h1').should('be.visible')
   // cy.get('#block-grid-item block-grid__item is-current is-movable').type('{selectall}').type('updated title') // need to investigate how to select and edit text.
   cy.get('[data-qa=builder-btn-publishsite]').click()
   cy.get ('#email').should('be.visible')
   cy.get ('#email').type(incoming_mailbox)
   cy.get('[data-qa="auth-submit-button"]').click()
   cy.get ('#password').type(password)
   cy.get ('#name').type(password)
   cy.get('[data-qa="auth-submit-button"]').click()
  

});





});