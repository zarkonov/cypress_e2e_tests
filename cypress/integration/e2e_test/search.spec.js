describe('Searchbox test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');

    })

    it('should type into searchbox and submit with pressing enter', () => {
        cy.get('#searchTerm')//id 'searchTerm' locator used
        .type('some text {enter}')
        //this command types in search box 'some text' 
        //and press enter, since there is no button
        //search results page is opened
        // and has to be inspected
    })

    it('should search results page', () => {
        // right click on search results when opened
        //and inspect them
        // <h2> is populated with "Search Results:"
        cy.get('h2').contains('Search Results')
        //we want to get from h2 element content
        //'search results 
    })
})