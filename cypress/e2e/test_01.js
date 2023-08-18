describe('Automation store sign up & login', () => {
    
    // global variables to store the values and use it in two test cases
    let loginName
    let password

    // test 1 to test the sign up process
    it('sign up process', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        // click on continue button to create an account
        cy.get('#accountFrm > fieldset > .btn').click()
        // set the values of login name and password in the variables
        loginName = "Katii"
        password = "asac1234"
        // now filling out the register form
        cy.get('#AccountFrm_firstname').type("Khadijah")
        cy.get('#AccountFrm_lastname').type("Saleh")
        cy.get('#AccountFrm_email').type("asalehkhadijah@gmail.com")
        cy.get('#AccountFrm_telephone').type("+9622934856026")
        cy.get('#AccountFrm_fax').type("445353")
        cy.get('#AccountFrm_company').type("ltuc")
        cy.get('#AccountFrm_address_1').type("Airport road")
        cy.get('#AccountFrm_address_2').type("Marj al-hamam")
        cy.get('#AccountFrm_city').type("Amman")
        cy.get('#AccountFrm_zone_id').select("Powys")
        cy.get('#AccountFrm_postcode').type("1234")
        cy.get('#AccountFrm_country_id').type("60495")
        cy.get('#AccountFrm_loginname').type(loginName)
        cy.get('#AccountFrm_password').type(password)
        cy.get('#AccountFrm_confirm').type(password)
        cy.get('#AccountFrm_newsletter1').first().check()
        cy.get('#AccountFrm_agree').check()
        cy.get('.col-md-2 > .btn').click()


    });

    // test 2 to test the login process after sign up
    it('login process', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        // now filling out the login form
        cy.get('#loginFrm_loginname').type(loginName)
        cy.get('#loginFrm_password').type(password)
        cy.get('#loginFrm > fieldset > .btn > .fa').click()
    });

});