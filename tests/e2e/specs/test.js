// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  beforeEach( () => {
    cy.visit('/')
  })
  it('Visits the app root url', () => {
    cy.contains('h1', 'Welcome to the cypress test')
  })
})
