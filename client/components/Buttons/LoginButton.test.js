import React from 'react'
import LoginButton from './LoginButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'

describe('ViewAllButton', () => {
  it('displays for admin', () => {
    renderWithRedux(<LoginButton />,
      {
        initialState: {
          user: {
            isAdmin: true
          }
        }
      })
    expect(screen.getByRole('button')).toBeNull()
  })

  it('displays for everyone', () => {
    renderWithRedux(<LoginButton />,
      {
        initialState: {
          user: {
            isRefugeCoordinator: true
          }
        }
      })
    expect(screen.getByRole('button')).toBeNull()
  })

  it('displays for generic user', () => {
    renderWithRedux(<LoginButton />,
      {
        initialState: {
          user: {
            isRefugeCoordinator: false,
            isAdmin: false
          }
        }
      })
    expect(screen.getByRole('button')).toBeNull()
  })
})
