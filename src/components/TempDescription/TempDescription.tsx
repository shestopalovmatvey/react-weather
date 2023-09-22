import React from 'react'
import style from './TempDescription.module.scss'

export default function TempDescription({weatherData}) {
    console.log(weatherData)
    return (
        <>
        {weatherData !== null && weatherData.hasOwnProperty("error") === false ? (
            <section className={style.section__temp__info}>
            <aside className={style.short__description}>
                <div className={style.short__description__info}>
                    <div className={style.short__description__temp}>
                        <p className={style.short__description__temp__value}>{weatherData.current.temp_c}°</p>
                        <p>Сегодня</p>
                    </div>

                    <img src={`/images/${weatherData.current.condition.icon.split('/').pop().split('.')[0]}.svg`} alt="" width={140} height={100}/>
                </div>

                <div>
                    <p className={style.short__description__time}>Время: {weatherData.location.localtime.split(' ')[1]}</p>
                    <p className={style.short__description__city}>Город: {weatherData.location.name}</p>
                </div>
            </aside>

            <article className={style.full__description}>
                <div className={style.full__description__points}>
                    <ul className={style.list__icons}>
                        <li>
                            <div className={style.image}>
                                <img src="/images/temp.svg" alt="" />
                            </div>
                            <p>Температура</p>
                        </li>
                        <li>
                            <div className={style.image}>
                                <img src="/images/pressure.svg" alt="" />
                            </div>
                            <p>Давление</p>
                        </li>
                        <li>
                            <div className={style.image}>
                                <img src="/images/precipitations.svg" alt=""/>
                            </div>
                            <p>Влажность</p>
                        </li>
                        <li>
                            <div className={style.image}>
                                <img src="/images/wind.svg" alt="" />
                            </div>
                            <p>Ветер</p>
                        </li>
                    </ul>
                </div>

                <div className={style.full__description__info}>
                    <ul className={style.list__info}>
                        <li><p>{weatherData.current.temp_c}° - ощущается как {weatherData.current.feelslike_c}°</p></li>
                        <li><p>{weatherData.current.pressure_mb} мм ртутного столба</p></li>
                        <li><p>{weatherData.current.humidity}%</p></li>
                        <li><p>{Math.floor(weatherData.current.wind_kph / 3.73)} м/с {weatherData.current.wind_dir}</p></li>
                    </ul>
                </div>
            </article>
        </section>
        ) : (
            <div style={{textAlign: 'center'}}>Необходимо ввести название города!</div>
        )}
    </>
    )
}
