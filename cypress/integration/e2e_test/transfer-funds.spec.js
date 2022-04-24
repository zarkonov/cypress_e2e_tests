describe('transfer funds verification  test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            //code in next 4 lines is replaced by
            //new command made for login
            //in support folder 
            //in commands file
            //that is why we commented next 4 lines:
            // cy.get('#user_login').type('username')
            // cy.get('#user_password').type('password')
            // cy.get('#user_remember_me').click()
            // cy.contains('Sign in').click();
            cy.login(username,password)
             //look at add in commands.js
             //to find out how new command
             //is defined to replace
             //4 lines of code
             //use this always for login
             //the same like this
             //it should be modifid all other tests
             //where we have the login
             //like in login.logout.spec.js
             //for wrong user name and password 
             //this would look like
             //cy.login(invalid username, invalid password)
        })
    })

    it('should fill transfer funds form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type('200')
        cy.get('#tf_description').type('textual description')
        cy.get('#btn_submit').click()
    })

    it('should verify correct data', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        //row above is now with 'have.value' cypress function  
        cy.get('#tf_toAccountId').should('have.value', 'Loan')
        cy.get('#tf_amount').should('have.value', '200')
      
    })    
    
})