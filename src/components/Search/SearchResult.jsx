import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { rawgAPI } from "../../api/api";
import Games from "../Games/Games";

const SearchResult = ({ search }) => {
  const searchTerm = useSelector((state) => state.search.term);
  const [games, setGameList] = useState([]);
  const [gamesCount, setGamesCount] = useState(0);

  useEffect(() => {
    if (search === "false") return;
    if (searchTerm === "" || !searchTerm) {
      setGamesCount(0);
      return;
    }
    const fetchSearchGame = async () => {
      const response = await rawgAPI.getSearch(searchTerm.term);
      if (!response) return;
      setGameList(response.data.results);
      setGamesCount(response.data.count);
    };
    fetchSearchGame();
  }, [search, searchTerm]);

  if (!gamesCount) {
    return (
      <div>
        <h2>Nothing Found</h2>
      </div>
    );
  }
  return <Games games={games} />;
};

export default SearchResult;
