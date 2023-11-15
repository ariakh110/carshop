"use client";
import { useState } from "react";
//
import { SearchManufaturer } from "./";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  function handleSearch() {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <input type="search" />
      <div className="searchbar__item">
        <SearchManufaturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  );
}

export default SearchBar;
