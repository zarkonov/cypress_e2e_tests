describe('Feedback test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.contains('Feedback').click();

    })

    it('should load feedback form page', () => {
        cy.get('form').should('be.visible')
    })

    it('should fill in feedback form on opened webpage', () => {
        cy.get('#name').type('Mister No')
        cy.get('#email').type('mister.no@example.com')
        cy.get('#subject').type('comics')
        cy.get('#comment').type('Comment for today!')
    })

    it('should submit feedback form on opened webpage', () => {
        cy.get('.btn-signin').click()
        //if the function name contains spaces 
        // only its first part until space is used
    })

    it('should display feedback message', () => {
        cy.get('h3').contains('Feedback')
        //cy.get('#feedback-title').contains('Feedback')
        //we want to get from h3 element content
        //'feedback-title' when FEEDBACK element
        //is inspected from opened web page 
    })
})