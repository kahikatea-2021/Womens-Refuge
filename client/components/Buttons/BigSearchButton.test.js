import React from 'react'
import BigSearchButton from  './BigSearchButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('ViewAllButton', () => {
    it('displays for admin', () => {
      renderWithRedux(<BigSearchButton />, 
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
      renderWithRedux(<BigSearchButton />, 
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
      renderWithRedux(<BigSearchButton />, 
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