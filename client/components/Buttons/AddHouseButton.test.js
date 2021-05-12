import React, { useState } from 'react'
import AddHouseButton from './AddHouseButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// import Header from '../components/Header'
// import LoadingIcon from './LoadingIcon'
// import { useAuth0 } from '@auth0/auth0-react'

describe('Add House Button', () => {
    it('displays for admin', () => {
      renderWithRedux(<AddHouseButton />, 
        { 
          initialState: {
            user: {
              isAdmin: true
            }
          }
        })
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  
    it('does not display if not an admin', () => {
      renderWithRedux(<AddHouseButton />)
      expect(screen.queryByRole('button')).toBeNull()
    })
  })
