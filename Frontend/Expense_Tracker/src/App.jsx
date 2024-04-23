import { useState } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'

import AllRoutes from './AllRoutes/Routes'
import { BrowserRouter, Router } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    
   <BrowserRouter>
  <Navbar/>
 <AllRoutes/>
 </BrowserRouter>


    
  )
}

export default App
