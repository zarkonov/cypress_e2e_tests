describe('currency  test', () => {
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

    it('should fill conversion form', () => {
       cy.get('#pay_bills_tab').click()
       cy.contains('Purchase Foreign Currency').click()//no incpect element, but href and text
       //new web page is open and 
       //we want to click on Add New Payee tab
       //that has no locator
       //in this case it is recommended to use
       //cy.contains
       // cy.contains is different than contain function
       //cy.contains is used when there are no locators available
       //while contain is used to confirm content on webpage 
       //after cy.get function.
       //inspect select box and find its locator
       //and select it, and then select some of
       //available options from select box 
       //like in this case 'EUR'
       cy.get('#pc_currency').select('EUR');
       //now do the same for filling the amount box 
       cy.get('#pc_amount').type('1000')
       //now click on $ conversion button:
       cy.get('#pc_inDollars_true').click()
       //now click on calculate costs
       cy.get('#pc_calculate_costs').click()
    })

    it('should display conversion amount', () => {
        cy.get('#pc_conversion_amount')
            .should('contain','721.40 euro (EUR) = 1000.00 U.S. dollar (USD)')

      
    })

    
    
})