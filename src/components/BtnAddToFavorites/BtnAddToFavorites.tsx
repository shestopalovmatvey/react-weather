export default function BtnAddToFavorites({setFavoritesCity, weatherData}) {
    const handlerAddClick = () => {
        setFavoritesCity((prev) => [weatherData, ...prev])
    }
    return (
        <div className="addToFavorite">
            <button className='btn__addToFavorite' onClick={handlerAddClick}>
                Добавить в Избранное 
            </button>
        </div>
    )
}
