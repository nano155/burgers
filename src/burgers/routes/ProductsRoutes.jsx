import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ProductsPage } from '../pages/ProductsPage'
import { ProducstDetail } from '../pages/ProducstDetail'
import { Navbar } from '../components/navbar/Navbar'
import { filterByCategory } from '../hooks/filterByCategory'

export const ProductsRoutes = () => {
  
  const navigate = useNavigate()

  const getCategory=()=>{

  }

  const onHandleClick =()=>{
    console.log(navigate);
    
  }
  return (
    <>
      <Navbar  onHandleClick={onHandleClick}/>
    <Routes>
        <Route path='/' element={<ProductsPage/>}/>
        <Route path='/category/:id' element={<ProductsPage/>}/>
        <Route path='/category/item/:id' element={<ProducstDetail/>}/>
    </Routes>
    </>
    
  )
}
