import React from 'react'
import './style.css'

const Books = () => {
    const Book=[
        {
           id:1,
           title: "The Alchemist",
           author: "Paulo Coelho",
           pages: 208
        },
        {
           id:2,
           title: "Wings of Fire",
           author: "A.P.J. Abdul Kalam",
           pages: 352
        },
        {
           id:3,
           title: "Ikigai",
           author: "Hector Garcia",
           pages: 288
        },
        {
           id:4,
           title: "The Hobbit",
           author: "J.R.R. Tolkien",
           pages: 310
        },
        {
           id:5,
           title: "Rich Dad Poor Dad",
           author: "Robert Kiyosaki",
           pages: 336
        }

    ]
  return (
    <div className="books">
        <h1>List of Books</h1>
        <ul>
            {Book.map((books)=>{
                let bookClass=" ";
                if(books.pages>300){
                    bookClass="Highlight";
                }
                return(
                    <li key={books.id} className={bookClass}>
                        <h3>{books.title}</h3>
                        <p>Author: {books.author}</p>
                        <p>Pages: {books.pages}</p>

                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Books