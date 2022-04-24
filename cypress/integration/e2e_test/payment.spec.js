describe('payment  test', () => {
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

    it('should send new payment for test only - not real', () => {
       cy.get('#pay_bills_tab').click()
       cy.contains('Pay Saved Payee').click()
       //new web page is open and 
       //we want to click on Add New Payee tab
       //that has no locator
       //in this case it is recommended to use
       //cy.contains
       // cy.contains is different than contain function
       //cy.contains is used when there are no locators available
       //while contain is used to confirm content on webpage 
       //after cy.get function
       //inspect select box and find its locator
       //and select it, and select some of
       //available options from select box 
       //lik in this case wellsfargo
       cy.get('#sp_payee').select('wellsfargo');
       //now do the same for next select box
       cy.get('#sp_account').select('Brokerage')
       cy.get('#sp_amount').type('2000')
       cy.get('#sp_date').type('2022-21-04 {enter}')
       //above row - selects a date we want and click enter
       //this is used always for dates inspection
       cy.get('#sp_description').type('description')
       cy.get('#pay_saved_payees').click()
    })

    it('should show success message', () => {
        cy.get('#alert_content')
            .should('be.visible')
            //if we use include it will be a mistake
            // it has to be used contain function
            //to check the content of the message
            .and('contain','The payment was successfully submitted')

      
    })

    
    
})