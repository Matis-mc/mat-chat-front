import React from 'react'
import ContactLeftPannel from './ContactLeftPannel'

describe('Test Contact Left Pannel', () => {
  it('renders', () => {
    cy.mount(<ContactLeftPannel />);
    cy.get('AddContactForm').should("exist");
    cy.get('[data-cy="contact-header"]').should('exist');
  })
})