import React from 'react'
import { useGlobalContext } from './context_08'


// components
import Navbar from './Navbar_08'
import CartContainer from './CartContainer_08'
// items

function App_08() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App_08
