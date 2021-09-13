import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchGame } from "../../app/searchSlice";
import search from "./../../assets/image/icon-search.svg";

const Search = (props) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  console.log("ST>>>>>>", searchTerm);

  return (
    <div className="search">
      <div>
        <form onSubmit={(e) => e.preventDefault()} role="search">
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autoFocus
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
          <NavLink
            to="/searchresult"
            className="searchSubmit"
            onClick={() => {
              dispatch(searchGame({ term: searchTerm }));
              setSearchTerm("");
            }}
          >
            <img src={search} alt="Search" />
          </NavLink>
        </form>
      </div>
      <div className="searchTitle">
        Easiest way to find your NEXT favorite game
      </div>
    </div>
  );
};

export default Search;
