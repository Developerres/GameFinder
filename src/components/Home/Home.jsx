import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { rawgAPI } from "../../api/api";
import Games from "../Games/Games";
import gamePerPage from "../Common/Const/const";
import Pagination from "../Common/Pagination/Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchGame } from "../../app/searchSlice";

const Home = ({ ordering, title, search, ...props }) => {
  const dispatch = useDispatch();
  const [games, setGameList] = useState([]);
  const [gamesCount, setGamesCount] = useState("0");
  const pageId = props.match.params.pageId || "1";
  console.log("PageID>>", pageId);
  const pagesCount = Math.ceil(gamesCount / gamePerPage);

  useEffect(() => {
    // let genres = props.match.params.genres || "";
    // let ordering = props.match.params.ordering || "";
    const isOrdering = ordering || "";

    const fetchGames = async () => {
      const response = await rawgAPI.getGameListAPI(null, isOrdering, pageId);
      setGameList(response.data.results);
      setGamesCount(response.data.count);
      console.log("RESP of GameList", response.data.results);
      console.log("Count", response.data.count);
      console.log("First USEEffect");
      dispatch(searchGame({ term: "" }));
    };
    fetchGames();
  }, [dispatch, ordering, pageId]);

  return (
    <div>
      <div className="pageTitle">
        {title}
        <span className="titleDot">.</span>
      </div>
      <Games games={games} currentPage={pageId} />
      <Pagination currentPage={pageId} path="games" pagesCount={pagesCount} />
    </div>
  );
};

const HomewithRouter = withRouter(Home);

export default HomewithRouter;
