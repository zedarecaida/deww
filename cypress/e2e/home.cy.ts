describe('Counter functionality', () => {
  let incrementButton;

  beforeEach(() => {
    cy.visit('http://localhost:3000') // change the URL to your app's URL
    incrementButton = cy.get('[data-cy="increment-button"]')
  })

  it('should increment counter correctly', () => {
    const times = 10
    for (let i = 0; i < times; i++) {
      incrementButton.click()
    }
    const expectedValue = times.toString()
    cy.get('[data-cy="counter-value"]').should('have.text', expectedValue)
  })

  it('should reset counter correctly', () => {
    const times = 10
    for (let i = 0; i < times; i++) {
      incrementButton.click()
    }
    cy.get('[data-cy="reset-button"]').click()
    cy.get('[data-cy="counter-value"]').should('have.text', '0')
  })
})
