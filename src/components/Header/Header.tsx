import React from 'react'
import { Link } from "react-router-dom"
import style from './Header.module.scss'


export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <Link to={"/"}>
                    <img src="/images/logo.svg" alt="logo" />
                    <h2>React weather</h2>
                </Link>
            </div>

            <nav className={style.header__nav}>
                <Link to={'/favorites'}>
                    <>Избранные города</>
                </Link>
            </nav>
        </header>
    )
}
