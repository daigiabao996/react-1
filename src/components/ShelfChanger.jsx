import React from "react";

export default function ShelfChanger({item, shelf, onChange}) {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => onChange(item, event.target.value)}
        defaultValue={shelf}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="none">None</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="currentlyReading">Currently Reading</option>
      </select>
    </div>
  );
}