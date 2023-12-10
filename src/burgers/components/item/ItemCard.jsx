import React from 'react'

export const ItemCard = ({name, precio}) => {
  return (
    <div className="card">
        <img src={`/src/assets/img/${name}.jpeg`} alt={`${name}`} />
        <div className='card-text'>
            <h3>{name}</h3>
            <p>{`Precio: $${precio}`}</p>
        </div>
        <div className='card-button'>
            <button className='btn btn-success'> Agregar al carrito</button>
        </div>
    </div>
  )
}
