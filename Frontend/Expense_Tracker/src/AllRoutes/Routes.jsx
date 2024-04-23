import React from 'react'
import { BrowserRouter as Route, Routes } from "react-router-dom";
import SignupForm from '../Components/Signup';
import LoginForm from '../Components/Login';
import Dashboard from '../Pages/Dashboard';

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
