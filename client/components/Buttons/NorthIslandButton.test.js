import React from 'react'
import NorthIslandButton from  './NorthIslandButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('NorthIslandButton', () => {
    it('displays for admin', () => {
      renderWithRedux(<NorthIslandButton />, 
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
      renderWithRedux(<NorthIslandButton />, 
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
      renderWithRedux(<NorthIslandButton />, 
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
