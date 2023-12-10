import React from 'react'
import { NavLink } from 'react-router-dom'

export const ListNavbar = ({id, onHandleClick}) => {
  return (
    <>
    <ul className='nav-list'>
        <li> 
        <button className='nav-button' onClick={onHandleClick}>
            {<NavLink 
            className={({isActive}) => isActive ? 'nav-link active' :'nav-link'} 
            to={`/category/:${id}`}>Hamburguesas</NavLink>} 
        </button>
        </li>
        <li>
            <button className='nav-button' onClick={onHandleClick}>
              {<NavLink className={({isActive}) => isActive ? 'nav-link active' :'nav-link'} 
            to={`/category/:${id}`}>Pizzas</NavLink>} 
              </button>
            
        </li>
        <li>
            {<NavLink className={({isActive}) => isActive ? 'nav-link active' :'nav-link'} 
            to={'#'}>Conocenos</NavLink>}
        </li>
    </ul>
    </>
  )
}
