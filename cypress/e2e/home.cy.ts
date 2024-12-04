// https://on.cypress.io/api

describe('home', () => {
  it('should load the home page', () => {
    cy.visit('/')
    cy.contains('h2', 'Welcome to Whisker Weekly!')
  })
})
