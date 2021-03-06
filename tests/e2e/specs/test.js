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
  it('has a home link', () => {
    cy.get('[data-cy=homeLink]').should('be.visible')
  })
  it('has a about link', () => {
    cy.get('[data-cy=aboutLink]').should('be.visible')
  })
  it('has a lists link', () => {
    cy.get('[data-cy=listsLink]').should('be.visible')
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

describe('List View', () => {
  beforeEach( () => {
    cy.visit('/lists')
  })
  it('links to the list page corretly', () => {
    cy.get('[data-cy=listsLink]').click()
    cy.contains('h1', 'Welcome to the List Page')
    cy.get('ul').find('li').should('have.length', 0)
  })
  it('adds a list item', () => {
    cy.get('input').type('Item 1')
    cy.get('button').click()
    cy.contains('li', 'Item 1')
  })
  it('can add multiple items', () => {
    cy.get('input').type('Item 1')
    cy.get('button').click()
    cy.get('input').type('Item 2')
    cy.get('button').click()
    cy.get('ul').find('li').should('have.length', 2)
    cy.get('input').should('be.empty');
  })
})
