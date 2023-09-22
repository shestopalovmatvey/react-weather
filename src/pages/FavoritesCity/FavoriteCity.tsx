import React from 'react'
import ListOfCIty from '../../components/ListOfCity/ListOfCIty'

export default function FavoriteCity({favoritesCity}) {
    return (
        <>
            <ListOfCIty favoritesCity={favoritesCity}/>
        </>
    )
}
