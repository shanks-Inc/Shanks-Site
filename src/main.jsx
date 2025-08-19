import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Bookings from './Bookings.jsx'
import Shop from './Shop.jsx'


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
