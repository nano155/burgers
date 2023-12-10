import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BurgerApp } from './BurgerApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <BurgerApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
