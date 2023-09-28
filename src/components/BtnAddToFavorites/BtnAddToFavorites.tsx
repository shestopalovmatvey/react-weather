import { useDispatch, useSelector } from "react-redux"
import { addCity } from "../../redux/listOfCity/listOfCity.slice"

export default function BtnAddToFavorites() {
    const { weather } = useSelector(store => store)
    const dispatch = useDispatch()
    const handlerAddClick = () => {
        dispatch(addCity(weather))
    }
    return (
        <div className="addToFavorite">
            <button className='btn__addToFavorite' onClick={handlerAddClick}>
                Добавить в Избранное 
            </button>
        </div>
    )
}
