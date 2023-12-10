import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductsRoutes } from '../burgers/routes/ProductsRoutes'
import { Login } from '../auth/pages/Login'


export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>     
        <Route path='/*' element={<ProductsRoutes/>}/>
    </Routes>
    
  )
}
