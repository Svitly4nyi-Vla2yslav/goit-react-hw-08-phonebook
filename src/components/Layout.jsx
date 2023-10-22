import React from 'react'
import { AppBar } from './AppBar/AppBar'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <AppBar/>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </div>
  )
}

