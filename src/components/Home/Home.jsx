import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { rawgAPI } from "../../api/api";
import Games from "../Games/Games";
import gamePerPage from "../Common/Const/const";
import Pagination from "../Common/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { searchGame } from "../../app/searchSlice";
import Preloader from "../Common/Preloader/Preloader";

const Home = ({ ordering, title, search, ...props }) => {
  const dispatch = useDispatch();
  const [games, setGameList] = useState([]);
  const [gamesCount, setGamesCount] = useState("0");
  const pageId = props.match.params.pageId || "1";
  const pagesCount = Math.ceil(gamesCount / gamePerPage);

  useEffect(() => {
    const isOrdering = ordering || "";

    const fetchGames = async () => {
      const response = await rawgAPI.getGameListAPI(null, isOrdering, pageId);

      setGameList(response.data.results);
      setGamesCount(response.data.count);
      dispatch(searchGame({ term: "" }));
    };
    fetchGames();
  }, [dispatch, ordering, pageId]);

  return (
    <div>
      <div className="pageTitle">
        {title}
        <span className="titleDot">.</span>
        {games.length === 0 ? <Preloader /> : ""}
      </div>
      <Games games={games} currentPage={pageId} />
      <Pagination currentPage={pageId} path="games" pagesCount={pagesCount} />
    </div>
  );
};

const HomewithRouter = withRouter(Home);

export default HomewithRouter;
