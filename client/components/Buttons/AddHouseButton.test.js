import React, { useState } from 'react'
import AddHouseButton from './AddHouseButton'
import { renderWithRouter } from '../../test-utils'
import { render } from '@testing-library/react'
// import Header from '../components/Header'
// import LoadingIcon from './LoadingIcon'
// import { useAuth0 } from '@auth0/auth0-react'

describe('Add House Button', () => {
    it('displays for admin', () => {
      renderWithRouter(<AddHouseButton isAdmin={true} event={{}}/>)
      expect(screen.getByRole('link', { name: 'Add Whare' })).toBeInTheDocument()
    })
  
    it('does not display if not an admin', () => {
      renderWithRouter(<AddHouseButton isAdmin={false} event={{}}/>)
      expect(screen.queryByRole('link', { name: 'Add Whare' })).toBeNull()
    })
  })