import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { searchGame } from "../../app/searchSlice";
import search from "./../../assets/image/icon-search.svg";
import s from "./Search.module.css";

const Search = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={s.search}>
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
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                dispatch(searchGame({ term: searchTerm }));
                setSearchTerm("");
                history.push("/searchresult");
              }
            }}
          />
          <NavLink
            to="/searchresult"
            className={s.searchSubmit}
            onClick={() => {
              dispatch(searchGame({ term: searchTerm }));
              setSearchTerm("");
            }}
          >
            <img src={search} alt="Search" />
          </NavLink>
        </form>
      </div>
      <div className={s.searchTitle}>
        Easiest way to find your NEXT favorite game
      </div>
    </div>
  );
};

export default Search;
