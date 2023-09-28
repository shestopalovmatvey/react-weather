import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import CurrentCity from './pages/CurrentCity/CurrentCity'
import FavoriteCity from './pages/FavoritesCity/FavoriteCity'

function App() {
  return (
    <div className='wrapper'>
      <Header />

      <Routes>
        <Route path='/' 
        element={
          <CurrentCity />
        }>
        </Route>

        <Route path='/favorites' 
        element={
          <FavoriteCity />
        }>
        </Route>
      </Routes>
    </div>
  )
}

export default App
