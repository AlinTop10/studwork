import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from "../page/main";
import Mains from "../page/mains";
import Log from "../page/log"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mains />}/> 
      <Route path="/login" element={<Log/>}/>
      <Route path="/reg" element={<Log/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
  )
}

export default AppRoutes