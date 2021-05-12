//Not working







// import React from 'react'
// import BackButton from  './BackButton'
// import { renderWithRedux } from '../../test-utils'
// import { screen } from '@testing-library/react'
// import '@testing-library/jest-dom'

// describe('ViewAllButton', () => {
//     it('displays for admin', () => {
//       renderWithRedux(<BackButton />, 
//         { 
//           initialState: {
//             user: {
//                 isAdmin: true
//               }
//           }
//         })
//       expect(screen.getByRole('button')).toBeInTheDocument()
//     })
  
//     it('displays for everyone', () => {
//       renderWithRedux(<BackButton />, 
//         { 
//           initialState: {
//             user: {
//                 isRefugeCoordinator: true
//               }
//           }
//         })
//       expect(screen.getByRole('button')).toBeInTheDocument()
//     })

//     it('displays for generic user', () => {
//       renderWithRedux(<BackButton />, 
//         { 
//           initialState: {
//             user: {
//               isRefugeCoordinator: false,
//               isAdmin: false
//           }
//         }
//         })
//       expect(screen.getByRole('button')).toBeInTheDocument()
//     })

  
//   })