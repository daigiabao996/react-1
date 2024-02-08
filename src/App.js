import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import SearchPage from "./components/SearchPage";
import * as BooksAPI from "./api/BookAPI";

function App() {
  const [booksList, setBooksList] = useState([]);
  const [searchBook, setSearchBook] = useState([]);
  const getAllBooksList = () => {
    BooksAPI.getAll()
      .then((books) => {
        setBooksList(books);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeShelve = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        getAllBooksList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSearchBooks = (query) => {
    if (query !== "") {
      BooksAPI.search(query)
        .then((book) => {
          setSearchBook(book);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSearchBook([]);
    }
  };
  useEffect(getAllBooksList, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BooksList booksList={booksList} changeShelve={changeShelve} />
            }
          />
          <Route
            path="/search"
            element={
              <SearchPage
                booksList={booksList}
                changeShelve={changeShelve}
                handleSearchBooks={handleSearchBooks}
                searchBook={searchBook}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
