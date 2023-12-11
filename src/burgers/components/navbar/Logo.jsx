import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <>
            <figure className='nav-logo'>
               <Link to='/'><img src="/src/assets/img/logo.png" alt="logo" /></Link>
            </figure>
        </>
    )
}
