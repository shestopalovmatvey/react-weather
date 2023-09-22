import BtnAddToFavorites from "../../components/BtnAddToFavorites/BtnAddToFavorites";
import SearchCity from "../../components/SearchCity/SearchCity";
import TempDescription from "../../components/TempDescription/TempDescription";

export default function CurrentCity({ setCurrentCity, weatherData, setClickOnBtnSearch, setFavoritesCity }: any) {
    return (
        <>
        <SearchCity setCurrentCity={setCurrentCity} setClickOnBtnSearch={setClickOnBtnSearch}/>
        <TempDescription weatherData={weatherData}/>
        <BtnAddToFavorites setFavoritesCity={setFavoritesCity} weatherData={weatherData}/>
        </>
    )
}
