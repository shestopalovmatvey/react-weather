import BtnAddToFavorites from "../../components/BtnAddToFavorites/BtnAddToFavorites";
import SearchCity from "../../components/SearchCity/SearchCity";
import TempDescription from "../../components/TempDescription/TempDescription";

export default function CurrentCity() {
    return (
        <>
        <SearchCity />
        <TempDescription />
        <BtnAddToFavorites/>
        </>
    )
}
