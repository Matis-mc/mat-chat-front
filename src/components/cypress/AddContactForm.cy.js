import React from 'react'
import AddContactForm from './AddContactForm'

describe('<AddContactForm />', () => {
  it('when the user click without enter any text, it should display an error', () => {
    cy.mount(<AddContactForm />)
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy="error-field"]').should('have.text', 'Oups, email required !')
  })
  it('when user did not enter text with @, it should display an error', () => {
    cy.mount(<AddContactForm />)
    cy.get('[data-cy="input-field"]').type("wrongemail");
    cy.get('[data-cy=submit-button]').click();
    cy.get('[data-cy="error-field"]').should('have.text', 'Invalid email address')
  })
  it('when user enter text with @, it should not display an error', () => {
    cy.mount(<AddContactForm />)
    cy.get('[data-cy="input-field"]').type("good@email.com");
    cy.get('[data-cy=submit-button]').click();
    cy.get('[data-cy="error-field"]').should('not.exist');
  })

})