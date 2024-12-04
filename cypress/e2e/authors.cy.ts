// https://on.cypress.io/api
describe('authors', () => {
  it('should navigate to the authors page when clicking on the authors link', () => {
    cy.visit('/')
    cy.get('nav').contains('Authors').click()
    cy.url().should('include', '/authors')
    cy.contains('h1', 'Authors')
  })

  it('should render the authors in the authors page', () => {
    cy.visit('/#/authors')
    cy.url().should('include', '/authors')
    cy.get('[data-cy=Elias]').should('exist')
  })

  it("navigates to author page on author card's readmore click", () => {
    cy.visit('/#/authors')
    cy.get('[data-cy=Elias-readmore]').click()
    cy.get('[data-cy=Elias]').should('exist')
  })
})
