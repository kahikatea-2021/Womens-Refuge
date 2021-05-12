import React from 'react'
import SouthIslandButton from  './SouthIslandButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('SouthIslandButton', () => {
    it('displays for admin', () => {
      renderWithRedux(<SouthIslandButton />, 
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
      renderWithRedux(<SouthIslandButton />, 
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
      renderWithRedux(<SouthIslandButton />, 
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
