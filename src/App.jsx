import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import "./App.css"
const App = () => {
  return (
    <div>
        <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App