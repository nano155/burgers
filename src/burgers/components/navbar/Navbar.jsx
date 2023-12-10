import React from 'react'
import { Logo } from './Logo'
import { ListNavbar } from './ListNavbar'
import { SocialMedia } from './SocialMedia'

export const Navbar = ({id, onHandleClick}) => {
  return (
    <header>
      <div className='container'>
      <nav className='nav'>
        <Logo/>
        <ListNavbar id={id} onHandleClick={onHandleClick}/>
        <SocialMedia/>
      </nav>
      </div>
    </header>
  )
}
