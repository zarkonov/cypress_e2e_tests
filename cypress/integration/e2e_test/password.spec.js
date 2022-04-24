describe('Password test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should click on Signin button', () => {
       cy.get('#signin_button')
       .click()
    })

    it('Should click on forgotten password', () => {
        cy.get('.offset3 > a')//class offset3 is up - 
        //for complete page
        // > a means it is followed by a selector 
        //from a href , dedicated to only 
        //Forget your password element
        //this way combine class with different selectors
       .click() 
     })

     it('Should fill email form', () => {
        cy.get('#user_email')//id selector type
        .type('test.email@email.com') 
     })

     it('Should submit the form', () => {
         cy.contains('Send Password')
         //contains followed by value selector content
         .click()
     })

})