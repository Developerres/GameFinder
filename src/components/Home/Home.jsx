import { useEffect, useState } from "react";
import { rawgAPI } from "../../api/api";
import Games from "../Games/Games";

const Home = ({ ordering, title }) => {
  const [games, setGameList] = useState([]);

  useEffect(() => {
    // let genres = props.match.params.genres || "";
    // let ordering = props.match.params.ordering || "";
    const isOrdering = ordering || "";

    const fetchGames = async () => {
      const response = await rawgAPI.getGameListAPI(null, isOrdering);
      setGameList(response.data.results);
      console.log("RESP of GameList", response.data.results);
    };
    fetchGames();
  }, []);

  return (
    <div>
      <div className="pageTitle">
        {title}
        <span className="titleDot">.</span>
      </div>
      <Games games={games} />
    </div>
  );
};

export default Home;
