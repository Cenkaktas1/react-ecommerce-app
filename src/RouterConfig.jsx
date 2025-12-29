import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Detay from './pages/Detay.jsx'
import Basket from './pages/Basket.jsx'

function RouterConfig() {
  return (
    <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<div>404 Not Found</div>} />
                <Route path='/detail/:id' element={<Detay />} />
                <Route path='/basket' element={<Basket />} />
            </Routes>
    </div>
  )
}

export default RouterConfig
