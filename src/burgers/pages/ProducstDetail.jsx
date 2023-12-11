import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getById } from '../hooks/getById'

export const ProducstDetail = () => {
  const {id}= useParams()
  const items = getById(id)
  
  if(!items) return <Navigate to='/' /> 

  console.log(items);
  return (
    <div className='items-container-details container'>
    <div className="card-detail">
        <img src={`/src/assets/img/${items.name}.jpeg`} alt={`${items.name}`} />
        <div className='card-text'>
            <h3>{items.name}</h3>
            <p>{`Precio: $${items.precio}`}</p>
        </div>
        <div className='card-button'>
            <button className='btn btn-success'> Agregar al carrito</button>
        </div>
    </div>
    </div>
   
  )
}
