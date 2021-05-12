import React from 'react'
import ViewAllButton from  './ViewAllButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('ViewAllButton', () => {
    it('displays for admin', () => {
      renderWithRedux(<ViewAllButton />, 
        { 
          initialState: {
            user: {
                isAdmin: true
              }
          }
        })
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  
    it('displays for everyone', () => {
      renderWithRedux(<ViewAllButton />, 
        { 
          initialState: {
            user: {
                isRefugeCoordinator: true
              }
          }
        })
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('displays for generic user', () => {
      renderWithRedux(<ViewAllButton />, 
        { 
          initialState: {
            user: {
              isRefugeCoordinator: false,
              isAdmin: false
          }
        }
        })
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

  
  })