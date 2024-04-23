import React from 'react'

import SignupForm from '../Components/Signup';
import LoginForm from '../Components/Login';
import Dashboard from '../Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';

function AllRoutes() {
  return (
   <Routes>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>
  )
}

export default AllRoutes
