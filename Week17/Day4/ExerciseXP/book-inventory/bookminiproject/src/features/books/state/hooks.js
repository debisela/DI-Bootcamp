import { useSelector, useDispatch } from "react-redux";
import { selectFilteredBooks, selectSelectedGenre } from "./selectors";
import { setGenre } from "./slice";

export const useFilteredBooks = ()=>{
    return useSelector(selectFilteredBooks);
};

export const useGenre = ()=>{
    const dispatch = useDispatch();
    const selectedGenre = useSelector(selectSelectedGenre);
    const changeGenre = (genre)=>{
        dispatch(setGenre(genre))
    }
    return {selectedGenre, changeGenre}
};