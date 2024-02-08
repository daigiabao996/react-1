import React from "react";
import { Link } from "react-router-dom";
import ShelfChanger from "./ShelfChanger";

export default function SearchPage({
  booksList,
  changeShelve,
  handleSearchBooks,
  searchBook,
}) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={() => handleSearchBooks("")}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => handleSearchBooks(event.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {(searchBook && searchBook.length) ?
            searchBook.map((book, index) => {
              let existBook = booksList.find((item) => item.id === book.id);
              return (
                <li key={index}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url("${
                            book.imageLinks && book.imageLinks.smallThumbnail
                          }")`,
                        }}
                      ></div>
                      {existBook ? (
                        <ShelfChanger
                          item={existBook}
                          shelf={existBook.shelf}
                          onChange={changeShelve}
                        />
                      ) : (
                        <ShelfChanger
                          item={book}
                          shelf={"none"}
                          onChange={changeShelve}
                        />
                      )}
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                      {book.authors &&
                      book.authors.length &&
                        book.authors.map((author, index) => (
                          <div className="book-authors" key={index}>
                            {author}
                          </div>
                        ))}
                    </div>
                  </div>
                </li>
              );
            })
          : ""}
        </ol>
      </div>
    </div>
  );
}
