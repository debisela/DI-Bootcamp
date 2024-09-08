import { configureStore, combineReducers } from "@reduxjs/toolkit";

import booksReducer from "../features/books/state/slice"

export const appReducer = combineReducers({
    books: booksReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store;