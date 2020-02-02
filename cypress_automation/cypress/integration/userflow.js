describe('userflow', function () {
    const builder='https://zyro.com/'
    const email = new Date().getTime();
    const incoming_mailbox = `test+${email}@gmail.com`;
    const password = `test+${email}`;
    
       
  it('Publish edited template-v1', function () {
    cy.visit(builder)
    cy.get('[data-qa="homepage-btn-startforfree"]').should('be.visible')
    cy.get('[data-qa="homepage-btn-startforfree"]').click()
    cy.get('[data-qa="choosetemplate-btn-startbuilding"]').first().should('be.visible')
    cy.get('[data-qa="template-hover-state"]').first().invoke('show')
    cy.get('[data-qa="choosetemplate-btn-startbuilding"]').first().invoke('show').click({ force: true }) 
    cy.get('#app > div > div > div.app-main__column-main.app-main__column-main--sidebar-open > div > div > section > section:nth-child(2) > div.block-grid > div.block-grid-item.block-grid__item.is-current.is-movable > div > h1').should('be.visible')
   // cy.get('#block-grid-item block-grid__item is-current is-movable').type('{selectall}').type('updated title') // need to investigate how to select and edit text.
   cy.get('[data-qa="builder-btn-publishsite"]').click()
   cy.get ('#email').should('be.visible')
   cy.get ('#email').type(incoming_mailbox)
   cy.get('[data-qa="auth-submit-button"]').click()
   cy.get ('#password').type(password)
   cy.get ('#name').type(password)
   cy.get('[data-qa="auth-submit-button"]').click()
  

});

it('Publish edited template-v2', function () {
    cy.visit(builder)
    cy.viewport(1460, 937)
    cy.get('[data-qa="homepage-btn-startforfree"]').should('be.visible')
    cy.get('[data-qa="homepage-sectionfull-btn-explore"]').scrollIntoView()
    //cy.get('[data-qa="cookiesmodal-message-gotit"]', { timeout: 100000 }).should('be.visible')
    //cy.get('[data-qa="cookiesmodal-message-gotit"]').click()
    cy.get('[data-qa="homepage-sectionfull-btn-explore"]').click()
    cy.get('[data-qa="template-hover-state"]').first().scrollIntoView()
    cy.get('[data-qa="choosetemplate-btn-startbuilding"]').first().scrollIntoView()
    cy.scrollTo('top')
    cy.get('[data-qa="choosetemplate-btn-startbuilding"]').first().invoke('show').click() 
    cy.get('.h-1').should('be.visible')
    cy.get('.h-1').dblclick().clear()  //clear and type works only for text area
    cy.get('.h-1').type('updated title')  //  need to think how to select text and type
    cy.get('[data-qa="builder-btn-publishsite"]').click()
   cy.get ('#email').should('be.visible')
   cy.get ('#email').type('email@email.com')
   cy.get('[data-qa="auth-submit-button"]', { timeout: 100000 }).should('be.visible')
   cy.get('[data-qa="auth-submit-button"]').click()
   cy.get ('#name').type(password)
   cy.get ('#password').type(password)
   cy.get ('#name').type(password)
   cy.get('[data-qa="auth-submit-button"]').click()
  

});



});