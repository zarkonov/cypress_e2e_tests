describe('filter transactions  test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username,password)
        })
    })

    it('should filter transactions', () => {
        cy.get('#account_activity_tab').click()
        cy.contains('Find transactions').click()
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('500')
        //sada nemamo id vec cemo da iskoristimo button
        // funkciju na sledeci nacin
        cy.get('button[type="submit"]').click()
    })

    it('should display results', () => {
        cy.get('#filtered_transactions_for_account').should('be.visible')
        //now we shold verify the nimber of table rows 'tr' in table body 'tbody'
        //should be in terms of length be greater than zero
        //and it syntax is - its('lenth').shouldd('be.gt', 0)
        //syntax is like this
        cy.get('tbody > tr')
            .its('length')
            .should('be.gt', 0)
    })    
    
})