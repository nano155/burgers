import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from '../pages/ProductsPage'
import { ProducstDetail } from '../pages/ProducstDetail'
import { Navbar } from '../components/navbar/Navbar'
import { filterByCategory } from '../hooks/filterByCategory'

export const ProductsRoutes = () => {
  const [category, setCategory] = useState('')
  
  

  const getCategory=()=>{

  }

  const onHandleClick =()=>{
    
  }
  return (
    <>
      <Navbar onHandleClick={onHandleClick}/>
    <Routes>
        <Route path='/' element={<ProductsPage/>}/>
        <Route path='/category/:id' element={<ProductsPage/>}/>
        <Route path='/category/item/:id' element={<ProducstDetail/>}/>
    </Routes>
    </>
    
  )
}
