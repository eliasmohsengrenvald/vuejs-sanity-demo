// https://on.cypress.io/api

describe('posts', () => {
  it('should navigate to the posts page when clicking on the news link', () => {
    cy.visit('/')
    cy.get('nav').contains('News').click()
    cy.url().should('include', '/news')
    cy.contains('h1', 'Latest posts')
  })
})
