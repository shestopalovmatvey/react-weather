import React from 'react'
import style from './ListOfCity.module.scss'
import { useSelector } from 'react-redux'
import { IWeatherObject } from '../../type'

export default function ListOfCIty() {  
    const {arrayOfWeather} = useSelector(store => store)
    console.log(arrayOfWeather)
    return (
        <>
        {arrayOfWeather.map((elem: IWeatherObject) => (
            <section className={style.section__citys}>
            <div className={style.card__city}>
                <div className={style.card__city__mainInfo}>
                    <div>
                        <p className={style.nameOfCity}>{elem.location!.name}</p>
                        <p>{elem.location!.localtime.split(' ')[1]}</p>
                    </div>

                    <p className={style.tempInCity}>{elem.current!.temp_c}°</p>
                </div>

                <div className={style.card__city__description}>
                    <p>Солнечно</p>
                    <p>Ощущается как: <span>{elem.current!.feelslike_c}</span>°</p>
                </div>
            </div>
        </section>
        ))}
        </>
    )
}
