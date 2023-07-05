import React from "react";

import "./search.css";

const Search = () => {
  return (
    <>
      <div class="search-wrapper">
        <div class="input-holder">
          <input
            type="text"
            class="search-input"
            placeholder="Type to Search"
          />
          <button class="search-icon" onClick="searchToggle(this, event);">
            <span></span>
          </button>
        </div>
        <span class="close" onClick="searchToggle(this, event);"></span>
      </div>
    </>
  );
};

export default Search;
