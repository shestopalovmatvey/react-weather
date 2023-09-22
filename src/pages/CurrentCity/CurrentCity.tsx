import BtnAddToFavorites from "../../components/BtnAddToFavorites/BtnAddToFavorites";
import SearchCity from "../../components/SearchCity/SearchCity";
import TempDescription from "../../components/TempDescription/TempDescription";

export default function CurrentCity({ setCurrentCity, weatherData }: any) {
    return (
        <>
        <SearchCity setCurrentCity={setCurrentCity}/>
        <TempDescription weatherData={weatherData}/>
        <BtnAddToFavorites />
        </>
    )
}
