import React from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";

export default function BooksList({booksList, changeShelve}) {
  const shelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, index) => (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksList.map(
                    (book, index) =>
                      book.shelf === shelf.key && (
                        <BookItem key={index} item={book} onChange={changeShelve}/>
                      )
                  )}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
