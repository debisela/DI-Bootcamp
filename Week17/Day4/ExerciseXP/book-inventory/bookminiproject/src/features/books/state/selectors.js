import { createSelector } from "@reduxjs/toolkit";

import { books, state } from "./slice";

export const selectBooks = (state) => state.books.books;

export const selectSelectedGenre = (state) => state.books.selectedGenre;

export const selectFilteredBooks = createSelector([selectBooks, selectSelectedGenre], 
    (books, genre)=>{
        if (genre === 'All') return books;
        return books.filter((book)=>book.genre === genre)
}
);


