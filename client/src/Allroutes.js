import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Auth from './pages/Auth'
const Allroutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Auth' element={<Auth />} />
        </Routes>
    )
}

export default Allroutes