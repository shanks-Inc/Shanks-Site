import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Bookings from './Bookings.jsx'
import Shop from './Shop.jsx'
import Shop from './Shop.jsx'
import './styles.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/bookings', element: <Bookings /> },
  { path: '/shop', element: <Shop /> },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
