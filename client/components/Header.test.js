// import React, { useState } from 'react'
// import Header from './Header'
// import { renderWithRedux } from '../test-utils'
// import { screen } from '@testing-library/react'
// import '@testing-library/jest-dom'

// currently not working 

// describe('Manage House Button', () => {
//     it('displays for refuge coordinator', () => {
//       renderWithRedux(<Header />, 
//         { 
//           initialState: {
//             user: {
//               house_id: 1
//             }
//           }
//         })
//       expect(screen.getByRole('div')).toBeInTheDocument()
//     })
  
//     it('does not display if not a refuge coordinator', () => {
//       renderWithRedux(<Header />)
//       expect(screen.queryByRole('div')).toBeNull()
//     })
//   })
