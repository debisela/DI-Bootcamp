import { createSlice } from "@reduxjs/toolkit";

const initialBooks = [
    { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 3, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror' },
    { id: 4, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' },
    { id: 6, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
    { id: 7, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 8, title: 'Foundation', author: 'Isaac Asimov', genre: 'Science Fiction' }
  ];
  

const initialState = {
    books: initialBooks,
    selectedGenre: "All"
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers:{
        setGenre(state, action){
            state.selectedGenre = action.payload;
        }


    }


})

export const books = (state) => state.booksReducer.books;
export const state = (state) => state.booksReducer;

export const {setGenre} = booksSlice.actions;

export default booksSlice.reducer;