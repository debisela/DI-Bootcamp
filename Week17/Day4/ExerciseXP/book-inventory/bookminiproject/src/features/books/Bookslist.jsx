import React from "react";
import { useFilteredBooks, useGenre } from "./state/hooks";

const Bookslist = (props)=>{
const books = useFilteredBooks()
console.log(books);
const {selectedGenre, changeGenre} = useGenre()



return(
    <>
    <div>
    <select value={selectedGenre} onChange={(e)=>changeGenre(e.target.value)}>
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Science Fiction">SciFi</option>
        <option value="Fantasy">Fantasy</option>
        </select>
    </div>
    <h2>books:</h2>
    <div>
        {books.map((item, index)=>(
            <div key={item.id}>{item.title} - {item.author}</div>
        ))}
    </div>
    </>
)

}
export default Bookslist;