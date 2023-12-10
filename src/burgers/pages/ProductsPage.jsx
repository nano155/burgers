import React from 'react'
import { ItemList } from '../components/item/ItemList'
import { Carousel } from '../components/carousel/Carousel'
import { filterByCategory } from '../hooks/filterByCategory'

export const ProductsPage = () => {
  
  return (
    <main className='container'>
      <Carousel/>
    <div className='items-container container'>
    <ItemList/>
    </div>
    </main>
  )
}
