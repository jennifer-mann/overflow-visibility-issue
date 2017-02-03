// In both tests below, the button element is NOT visible
// They should BOTH fail, but the first one passes.

describe('Visibility Issue', function(){
  it('this test should fail', function(){
    cy.visit('index.html')
    cy.get("button").should("be.visible")
  })

  it('this test fails properly', function(){
    cy.visit('index.html')
    cy.get("button").click()
  })
})
