import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'



export const ListNavbar = ({ onHandleClick, valorInicial}) => {
  const [nav, setNav] = useState(valorInicial)

  return (
    <>
    {
      nav.map(navegacion=>(
        <li key={navegacion.name}>
        <NavLink
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          to={`/category/${navegacion.name}`}>
          <button className='nav-button' onClick={onHandleClick}>
            {navegacion.category}
          </button>
        </NavLink>
      </li>
      ))
    }
      
    </>
  )
}

{/* <ul className='nav-list'>
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
</ul> */}