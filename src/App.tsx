import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import CurrentCity from './pages/CurrentCity/CurrentCity'
import axios from 'axios'
import FavoriteCity from './pages/FavoritesCity/FavoriteCity'

const API_KEY = '210f64eb38a84d56a27155337230703'


// interface FavoriteElement {
//   temp_c: number,
//   name: string,
//   localTime: string,
//   feelslike_c: number,
// }

function App() {
  const [currentCityInfo, setCurrentCity] = useState<string>('')
  const [clickOnBtnSearch, setClickOnBtnSearch] = useState(false)
  const [weatherData, setweatherData] = useState<any | null>(null)
  const [favoritesCity, setFavoritesCity] = useState([])

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang="ru"&q=${currentCityInfo.toLowerCase()}&aqi=no`)
    .then(response => response.data)
    .then((data) => {
      setweatherData(data)
    })
    .catch((error) => {
      console.log(error)
    }) 
  }, [clickOnBtnSearch])
  
  return (
    <div className='wrapper'>
      <Header />

      <Routes>
        <Route path='/' 
        element={
          <CurrentCity 
            setCurrentCity={setCurrentCity} 
            weatherData={weatherData} 
            setClickOnBtnSearch={setClickOnBtnSearch}
            setFavoritesCity={setFavoritesCity} 
          />
        }>
        </Route>

        <Route path='/favorites' 
        element={
          <FavoriteCity
            favoritesCity={favoritesCity}
          />
        }>
        </Route>
      </Routes>
    </div>
  )
}

export default App
