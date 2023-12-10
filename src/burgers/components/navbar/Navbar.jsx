import React from 'react'
import { Logo } from './Logo'
import { ListNavbar } from './ListNavbar'
import { SocialMedia } from './SocialMedia'

export const Navbar = ({onHandleClick}) => {
  return (
    <header>
      <div className='container'>
      <nav className='nav'>
        <Logo/>
        <ListNavbar onHandleClick={onHandleClick}/>
        <SocialMedia/>
      </nav>
      </div>
    </header>
  )
}
