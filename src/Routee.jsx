import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Businessloan from './Component/Businessloan'
import About from './Component/About'
import Dealer from './Component/Dealer'
import Nbfc from './Component/Nbfc'
import OurBranch from './Component/OurBranch'
import Product from './Component/Product'
import Support from './Component/Support'
import Login from './Component/Login'
import ApplyLoan from './Component/ApplyLoan'
import Home from './Component/Home'


const Routee = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='about' element={<About/>} />
        <Route  path='loan' element={<Businessloan/>} />
        <Route  path='dealer' element={<Dealer/>} />
        <Route  path='nbfc' element={<Nbfc/>} />
        <Route  path='branch' element={<OurBranch/>} />
        <Route  path='product' element={<Product/>} />
        <Route  path='support' element={<Support/>} />
        <Route  path='login' element={<Login/>} />
        <Route  path='aaplyloan' element={<ApplyLoan/>} />     
      </Routes>
    </div>
  )
}

export default Routee