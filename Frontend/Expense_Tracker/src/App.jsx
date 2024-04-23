import { useState } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import { Router } from 'react-router-dom'
import AllRoutes from './AllRoutes/Routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
 <AllRoutes/>
 </>
    
  )
}

export default App
