import React from 'react'
import { Dashboard } from './dashboard/Dashboard'
import { Highlight } from './highlights/Highlight'
import { Categories } from './categories/Categories'

export const Home = () => {
  return (
    <div>
        <Dashboard/>
        <Highlight/>
        <Categories/>
    </div>
  )
}
