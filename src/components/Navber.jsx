import React from 'react'
import { Link } from 'react-router-dom'
import "./Navber.css"
import img  from "../image/logo.jpg"


export const Navber = () => {
  return (
    <>
    <div className="main">
      <div className="main-left">
        <img src={img} alt="" />
      </div>
      <div className="main-right">
      <Link to={'/'} className='jay'>Home</Link>
    <Link to={'/About'} className='jay'>About</Link>
    <Link to={'/Product'} className='jay'>Product</Link>
    <Link to={'/Checkout'} className='jay'>Checkout</Link>
   <Link to={'/Blog'} className='jay'>Blog</Link>
   <Link to={'/Contact'} className='jay'>Contact</Link>
      </div>
    </div>
    
    </>
  )
}
