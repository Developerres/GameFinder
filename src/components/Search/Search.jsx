import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchGame } from "../../app/searchSlice";
import search from "./../../assets/image/icon-search.svg";
import s from "./Search.module.css";

const Search = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchGame({ term: searchTerm }));
    setSearchTerm("");
    history.push("/searchresult");
  };

  return (
    <div className={s.search}>
      <div>
        <form onSubmit={handleSubmit} role="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
          <button type="submit" className={s.searchSubmit}>
            <img src={search} alt="Search" />
          </button>
        </form>
      </div>
      <div className={s.searchTitle}>
        Easiest way to find your NEXT favorite game
      </div>
    </div>
  );
};

export default Search;
