import React from 'react'
import LittleSearchButton from './LittleSearchButton'
import { renderWithRedux } from '../../test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('ViewAllButton', () => {
  it('displays for admin', () => {
    renderWithRedux(<LittleSearchButton />,
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
    renderWithRedux(<LittleSearchButton />,
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
    renderWithRedux(<LittleSearchButton />,
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
