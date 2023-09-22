import {useState} from 'react'
import style from './SearchCity.module.scss'

export default function SearchCity({setCurrentCity}) {

    const [searchValue, setSearchValue] = useState('')
    const handleSearch = () => {
        setCurrentCity(searchValue)
    }

    return (
        <div className={style.block__search}>
            <input type="text" placeholder="Введите город..." className={style.input__location} onChange={(evt) => setSearchValue(evt.currentTarget.value)}/>
            <button className={style.btn__search} onClick={handleSearch}>
                Поиск
            </button>
        </div>
    )
}
