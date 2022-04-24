describe('Login & logout  test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('#signin_button').click();
    })

    it('should try login with invalid data', () => {
        //first test login form is visible
        //by inspcting not the precise field
        //but entire area where the field is positioned
        cy.get('#login_form').should('be.visible')
        //after confrmed it is visible,
        //inspect the login field itself
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        //for Sign in button - there is no ID locator, 
        //but it is located by content so we use 
        //contain function with the name of the button 
        //presented in the button on UI and on "value"
        //of the inspected element
        cy.contains('Sign in').click();
    })

    it('should displey error message', () => {
        //inspect the error mesage,
        //put the class (if contains spaces) it must be 
        //used  a part w/o space 
        cy.log('possible issue with class name in next row')
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain','Login and/or password are wrong.')

      
    })

    it('should login to application', () => {
        cy.fixture('user').then(user => {
            //inicijalni sample.json koji je postojao
            //u fixture folderu se brise i pravi se 
            //novi user.json gde se definisu 
            //username i password
            //sa funkcijom cy.fixture se poziva 
            //json file 'user" iz fixture foldera
            //onda se koristi .fixture funkcija sa
            //imenom json fajla kao argumentom i posle
            //then se otvara nova funkcija u kojoj se
            //definisu promenjive koje su jednake
            //ime json fajla iz fixtures . ime 
            //promenjive iz njega koje je dato
            //npr. - user.id pa zatim user.pwd
            const username = user.id 
            const password = user.pwd
            //posle se radi inspect polja za 
            //user i password i dodeli im se
            // da se otkuca u svako polje
            //ono definsano iz fixture/user.json 
            //fajla
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            //posle se cekira i cekbox REMEMBER ME
            cy.get('#user_remember_me').click();
            //POSLE SE KLIKNE NA Sign in dugme
            cy.contains('Sign in').click();
        })
        //after the login, outside the cy.fixture it has to be
        //confirmed that correct webpage is open
        //so inspection of upper part of web page is needed
        //and it was found before a class name that there is 'ul'
        //and if the function name contains spaces 
        // only its first or last part w/o space is used
        cy.get('ul.nav-tabs').should('be.visible');
    })
    it('should logout', () => {
        //inspect the error mesage,
        //put the class (if contains spaces) it must be 
        //used  a part w/o space 
        cy.contains('username').click()
        //ako nije primenjivo niti efikasno naci 
        //drugi lokator, primeniti 
        //contains funkciju i sa inspect 
        //pronaci gde osenci bas to dugme na kome
        //pise "username"
        cy.get('#logout_link').click()
        cy.url().should('contain','index.html')
      
    })
    
})