import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { rawgAPI } from "../../../api/api";
import Games from "../../Games/Games";

const GenreGameList = (props) => {
  const genres = props.match.params.genres || "";
  const [games, setGameList] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const response = await rawgAPI.getGameListAPI(genres);
      setGameList(response.data.results);
    };
    fetchGames();
  }, [genres]);

  return (
    <div>
      <div className="pageTitle">
        {genres}
        <span className="titleDot">.</span>
      </div>
      <Games games={games} />
    </div>
  );
};

const GenreGameListwithRouter = withRouter(GenreGameList);
export default GenreGameListwithRouter;
