import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { ListNavbar } from './ListNavbar'
import { SocialMedia } from './SocialMedia'


export const Navbar = () => {
  const onHandleClick =()=>{
    console.log('hola mundo');
  }
  return (
    <header>
      <div className='container'>
      <nav className='nav'>
        <Logo/>
        <ul className='nav-list'>
            <ListNavbar valorInicial={[
              {
                name:'burger',
                category:'Hamburguesa'
              },
              {
                name: 'pizza',
                category:'Pizza'
              },
              {
                name:'contacto',
                category:'Contactanos'
              }

            ]}/>
        </ul>
        
        <SocialMedia/>
      </nav>
      </div>
    </header>
  )
}
