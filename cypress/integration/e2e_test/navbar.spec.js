describe('Navbar test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        cy.contains('Online Banking')//when this  
        //selector is chosen it is dedicated 
        //exclusively to  Online Banking
        .click()
        cy.url().should('include','online-banking.html')
        //above row confirms that the correct page is opened
        //by adding online-banking.html from browser to the include
        //argument and should method and url function
        //after click to test if the correct page is opened
        cy.get('h1').should('be.visible')//check that h1 element is visible
        //after click and testing the correct page is opened
        //testing if the h1 element is visible
    })

    it('Should display feedback content', () => {
        cy.contains('Feedback')
        .click()
        cy.url().should('include','feedback.html')
      
    })

    it('Should display homepage content', () => {
        cy.contains('Zero Bank')
        .click()
        cy.url().should('include','index.html')

    })
})