import React from 'react'
import ManageHouseButton from './ManageHouseButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'
// import '@testing-library/jest-dom'

describe('ManageHouse Button', () => {
  it('does NOT display for admin', () => {
    renderWithRedux(<ManageHouseButton />,
      {
        initialState: {
          user: {
            isAdmin: true
          }
        }
      })
    expect(screen.getByRole('button')).toBeNull()
  })

  it('DOES display for refuge coordinator', () => {
    renderWithRedux(<ManageHouseButton />,
      {
        initialState: {
          user: {
            isRefugeCoordinator: true
          }
        }
      })
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('does NOT display for generic user', () => {
    renderWithRedux(<ManageHouseButton />,
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
