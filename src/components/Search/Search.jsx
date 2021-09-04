import search from "./../../assets/image/icon-search.svg";

const Search = (props) => {
  return (
    <div className="search">
      <div>
        <form onSubmit="event.preventDefault();" role="search">
          <label for="search">Search for stuff</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autoFocus
            required
          />
          <button type="submit">
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
