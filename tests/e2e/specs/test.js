// https://docs.cypress.io/api/introduction/api.html

describe('Home view', () => {
  beforeEach( () => {
    cy.visit('/')
  })
  it('Visits the app root url', () => {
    cy.contains('h1', 'Welcome to the cypress test')
  })
  it('Has 4 plugin links', () => {
    cy.get('[data-cy=plugins]').find('li').should('have.length', 4)
  })
  it('Has 5 essential links', () => {
    cy.get('[data-cy=essential]').find('li').should('have.length', 5)
  })
  it('links to about page correctly', () => {
    cy.get('[data-cy=aboutLink]').click()
    cy.contains('h1', 'This is an about page')
  })
})

describe('About view', () => {
  beforeEach( () => {
    cy.visit('/about')
  })
  it('displays the about info', () => {
    cy.contains('h1', 'This is an about page')
  })
  it('links to the home page corretly', () => {
    cy.get('[data-cy=homeLink]').click()
    cy.contains('h1', 'Welcome to the cypress test')
  })
})
