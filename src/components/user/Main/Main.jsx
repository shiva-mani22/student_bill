import React from 'react'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  )
}

export default Main