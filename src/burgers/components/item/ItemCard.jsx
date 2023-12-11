import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({name, precio}) => {
  return (
    <div className="card">
        <img src={`/src/assets/img/${name}.jpeg`} alt={`${name}`} />
        <div className='card-text'>
            <Link to={`/category/item/${name}`}><h3>{name}</h3></Link>
            <p>{`Precio: $${precio}`}</p>
        </div>
        <div className='card-button'>
            <button className='btn btn-success'> Agregar al carrito</button>
        </div>
    </div>
  )
}
