import React from 'react'
import LogoutButton from './LogoutButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Back Button', () => {
  it('displays for everyone', () => {
    renderWithRedux(<LogoutButton />,
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
    renderWithRedux(<LogoutButton />,
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
