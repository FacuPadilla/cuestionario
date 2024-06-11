import React from 'react'
import { CategoryList } from '../components/CategoryList'

export const HomePage = () => {
  return (
    <div className='container '>
      <CategoryList/>
      <p className='text-center mb-2 font-bold'>Created & developed by Facundo Jose Padilla</p>
    </div>
  )
}
