import React from "react";
import ShelfChanger from "./ShelfChanger";

export default function BookItem({ index, item, onChange }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${item.imageLinks.thumbnail})`,
            }}
          ></div>
          <ShelfChanger item={item} shelf={item.shelf} onChange={onChange}/>
        </div>
        <div className="book-title">{item.title}</div>
        {item.authors.length &&
          item.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
}
