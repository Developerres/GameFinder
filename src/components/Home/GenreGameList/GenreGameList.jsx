import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { rawgAPI } from "../../../api/api";
import gamePerPage from "../../Common/Const/const";
import Pagination from "../../Common/Pagination/Pagination";
import Preloader from "../../Common/Preloader/Preloader";
import Games from "../../Games/Games";

const GenreGameList = (props) => {
  const genres = props.match.params.genres || "";
  const pageId = props.match.params.pageId || "1";
  const [gamesCount, setGamesCount] = useState("0");
  const [games, setGameList] = useState([]);
  const pagesCount = Math.ceil(gamesCount / gamePerPage);
  useEffect(() => {
    const fetchGames = async () => {
      const response = await rawgAPI.getGameListAPI(genres, null, pageId);
      setGameList(response.data.results);
      setGamesCount(response.data.count);
    };
    fetchGames();
  }, [genres, pageId]);

  return (
    <div>
      <div className="pageTitle">
        {genres}
        <span className="titleDot">.</span>
      </div>
      {games.length === 0 ? <Preloader /> : ""}
      <Games games={games} />
      <Pagination
        currentPage={pageId}
        path={"genre/" + genres}
        pagesCount={pagesCount}
      />
    </div>
  );
};

const GenreGameListwithRouter = withRouter(GenreGameList);
export default GenreGameListwithRouter;
