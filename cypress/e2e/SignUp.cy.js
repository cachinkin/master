import testdata from "../fixtures/example.json"

describe('Automation Exercise', () => {
  it('Sign up Scenario', () => {
    cy.log("Visit the URL");
    cy.visit('https://www.automationexercise.com/login')

    cy.log("Enter Name");
    cy.wait(1000);
    cy.get("[data-qa='signup-name']").type(testdata.name);

    cy.log("Enter Email Address");
    cy.get("[data-qa='signup-email']").type(testdata.email);

    cy.log("Click Signup button");
    cy.get("[data-qa='signup-button']").click();

    cy.log("Enter Password");
    cy.wait(3000);
    cy.get("[data-qa='password']").type(testdata.password);

    cy.log("Enter Days");
    cy.get("[data-qa='days']")
    .select(testdata.days);

    cy.log("Enter Month");
    cy.get("[data-qa='months']")
    .select(testdata.months);

    cy.log("Enter Year");
    cy.get("[data-qa='years']")
    .select(testdata.years);

    cy.log("Enter First Name");
    cy.get("[data-qa='first_name']").type(testdata.first_name);

    cy.log("Enter Last Name");
    cy.get("[data-qa='last_name']").type(testdata.last_name);

    cy.log("Enter Address");
    cy.get("[data-qa='address']").type(testdata.address);

    cy.log("Enter Country ");
    cy.get("[data-qa='country']")
    .select(testdata.country);

    cy.log("Enter State");
    cy.get("[data-qa='state']").type(testdata.state);

    cy.log("Enter City");
    cy.get("[data-qa='city']").type(testdata.city);

    cy.log("Enter Zipcode");
    cy.get("[data-qa='zipcode']").type(testdata.zipcode);

    cy.log("Enter Mobile Number");
    cy.get("[data-qa='mobile_number']").type(testdata.mobile_number);

    cy.log("Click Create Account");
    cy.get("[data-qa='create-account']").click();

    cy.log("Verify Account Creation");
    cy.get("[data-qa='account-created']").should('have.text','Account Created!');

    cy.log("Click 'Continue' button upon Account Creation");
    cy.get("[data-qa='continue-button']").click();

    cy.log("Verify after sign Up, User is Logged in");
    cy.contains("Logged in as").should('have.text',' Logged in as '+testdata.name);
  })

})