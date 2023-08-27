import testdata from "../fixtures/example.json"

describe('Automation Exercise', () => {
  it('Log In Scenario', () => {
    cy.log("Visit the URL"); 
    cy.visit('https://www.automationexercise.com/login');
    
    cy.log("Enter Email Address");
    cy.get("[data-qa='login-email']").type(testdata.email);

    cy.log("Enter Email Address");
    cy.get("[data-qa='login-password']").type(testdata.password);

    cy.log("Click Signup button");
    cy.get("[data-qa='login-button']").click();

    cy.wait(3000);
    cy.log("Verify Logged in");
    cy.contains("Logged in as").should('have.text',' Logged in as '+testdata.name);

    //deletes the created account
    cy.get("[href='/delete_account']").click();

  })

})