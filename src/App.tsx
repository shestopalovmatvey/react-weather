import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import CurrentCity from './pages/CurrentCity/CurrentCity'

const API_KEY = '210f64eb38a84d56a27155337230703'


function App() {
  const [currentCityInfo, setCurrentCity] = useState<string>('')
  const [weatherData, setweatherData] = useState<any | null>(null)
  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang="ru"&q=${currentCityInfo}&aqi=no`)
    .then(response => response.json())
    .then((data) => {
      setweatherData(data)
    })
    .catch((error) => {
      console.log(error)
    }) 
  }, [currentCityInfo])
  
  return (
    <div className='wrapper'>
      <Header />

      <Routes>
        <Route path='/' element={<CurrentCity setCurrentCity={setCurrentCity} weatherData={weatherData} />}>
        </Route>

        <Route path='/favorites' element={<>asdasd</>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
