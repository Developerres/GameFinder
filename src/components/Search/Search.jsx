import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { searchGame } from "../../app/searchSlice";
import search from "./../../assets/image/icon-search.svg";

const Search = (props) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search">
      <div>
        <form onSubmit={(e) => e.preventDefault()} role="search">
          <label for="search">Search for stuff</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autoFocus
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
          <button
            type="submit"
            aria-label="Search"
            onClick={() => {
              dispatch(searchGame({ term: searchTerm }));
            }}
          >
            <img src={search} alt="Search" />
          </button>
        </form>
      </div>
      <div className="searchTitle">
        Easiest way to find your NEXT favorite game
      </div>
    </div>
  );
};

export default Search;
