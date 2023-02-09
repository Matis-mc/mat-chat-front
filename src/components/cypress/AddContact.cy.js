import React from 'react'
import AddContact from '../core-component/contact-left-pannel/AddContact'

describe('<AddContact />', () => {
  it('renders', () => {
    cy.mount(<AddContact />)
  })
})