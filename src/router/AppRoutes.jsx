import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from "../page/main";
import Mains from "../page/mains";
import Log from "../page/log"
import ProtectedRoute from "./ProtectedRoute";
import AccountActivated from '../page/AccountActivated';
import ClaimJob from "../page/ClaimJob";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mains />}/> 
      <Route path="/login" element={<Log/>}/>
      <Route path="/reg" element={<Log/>}/>

      <Route path="/activated" element={<AccountActivated/>}/>
       
      <Route path="/claim/:token" element={<ClaimJob />} /> 

      <Route
        path="/main"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes