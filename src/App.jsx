import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navber } from './components/Navber'
import { Home } from './components/Home'
import { About } from './components/About'
import { Product } from './components/Product'
import { Checkout } from './components/Checkout'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'

function App() {
  <Navber />
  let route = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/About',
      element: <About/>
    },
    {
      path: '/Product',
      element: <Product/>
    },
    {
      path: '/Checkout',
      element: <Checkout/>
    }, 
    {
      path: '/Blog',
      element: <Blog/>
    },
    {
      path: '/Contact',
      element: <Contact/>
    }

  ])

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
