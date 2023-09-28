import { useState, useEffect } from 'react'
import style from './SearchCity.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setInputText } from '../../redux/inputText/inputText.slice'
import axios from 'axios'
import { updateWeather } from '../../redux/currentWeather/currentWeather.slice'

const API_KEY = '210f64eb38a84d56a27155337230703'

export default function SearchCity() {
    const { input } = useSelector(store => store)
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch()

    const getWeatherData = async () => {
        try {
          const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=ru&q=${input.inputText}&aqi=no`
          );
          const data = response.data;
          dispatch(updateWeather(data));
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        if (searchValue && input.inputText !== searchValue.toLowerCase()) {
          dispatch(setInputText(searchValue.toLowerCase()));
        }
      }, [searchValue, input.inputText, dispatch]);

    const handleSearch = () => {
        getWeatherData()
    };
    
    return (
        <div className={style.block__search}>
            <input type="text" placeholder="Введите город..." className={style.input__location} onChange={(evt) => setSearchValue(evt.currentTarget.value)}/>
            <button className={style.btn__search} onClick={handleSearch}>
                Поиск
            </button>
        </div>
    )
}
