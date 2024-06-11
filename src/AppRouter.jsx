import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {HomePage, CategoryPage} from './pages'
import {NavBar} from './components'

export const AppRouter = () => {
  return( 
  <>
  <NavBar/>
  
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/category/:category' element={<CategoryPage/>} />
    </Routes>
  </>
  )
}
