import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { rawgAPI } from "../../../api/api";
import { gameName, incrementByAmount } from "../../../app/favoriteSlice";
import pc from "./../../../assets/image/pc.svg";
import playstation from "./../../../assets/image/playstation.svg";
import xbox from "./../../../assets/image/xbox.svg";
import nintendo from "./../../../assets/image/nintendo.svg";
import mac from "./../../../assets/image/mac.svg";
import linux from "./../../../assets/image/linux.svg";
import Gallery from "react-grid-gallery";

const Game = (props) => {
  const currentGameName = useSelector(gameName);
  const dispatch = useDispatch();

  console.log("Props>>", props);
  const [gameInfo, setGameInfo] = useState({
    name: "",
    description: "",
    metacritic: "",
    released: "",
    background_image: "",
    dominant_color: "",
    parent_platforms: [],
    genres: [],
    tags: [],
    description_raw: "",
  });

  const [gameScreenshots, setGameScreenshots] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    let gameId = props.match.params.gameId || "1";
    const fetchGamesInfo = async () => {
      const response = await rawgAPI.getGameInfoAPI(gameId);
      if (response.data) setGameInfo(response.data);
      console.log("RESP", response.data);

      // Load screenshots

      const responseScreenshots = await rawgAPI.getGameScreenshotsAPI(gameId);
      if (responseScreenshots.data)
        setGameScreenshots(responseScreenshots.data.results);
      console.log("RESP Screens", responseScreenshots.data.results);
    };
    fetchGamesInfo();
  }, []);

  const screenshots = gameScreenshots.map((s) => ({
    src: `${s.image}`,
    thumbnail: `${s.image}`,
    caption: `${gameInfo.name} - ${gameInfo.id}`,
  }));

  const platforms = gameInfo.parent_platforms.map((p) => p.platform.slug);
  console.log(platforms);

  const images = {
    pc,
    playstation,
    xbox,
    nintendo,
    mac,
    linux,
  };
  function getImageByKey(key) {
    return images[key];
  }

  return (
    <div
      className="gameCardImage"
      style={{
        background: `linear-gradient(0deg, rgba(26,28,34,1) 10%, rgba(26,28,34,0.8) 50%, rgba(26,28,34,0.8) 50%, rgba(26,28,34,1) 90%), url(${gameInfo.background_image})`,
      }}
    >
      <div
        style={{
          background: `linear-gradient(90deg, rgba(26,28,34,1) 5%, rgba(26,28,34,0) 50%, rgba(26,28,34,0) 50%, rgba(26,28,34,1) 95%)`,
        }}
      >
        <div className="gameContent">
          <div>
            <div className="flex">
              <div className="whiteLabel">{gameInfo.released}</div>
              <div className="gamePlatforms">
                {gameInfo.parent_platforms.map((p) => (
                  <img
                    key={p}
                    src={getImageByKey(p.platform.slug)}
                    alt={p.platform.name}
                  />
                ))}
              </div>
            </div>
            <div className="pageTitle">
              {gameInfo.name}
              <span className="titleDot">.</span>
            </div>
            <div>
              <div>ID: {gameInfo.id}</div>
              <button
                aria-label="Increment amount value"
                onClick={() =>
                  dispatch(
                    incrementByAmount({
                      gameId: gameInfo.id,
                      gameName: gameInfo.name,
                      metacritic: Number(gameInfo.metacritic),
                      released: gameInfo.released,
                      background_image: gameInfo.background_image,
                      parent_platforms: gameInfo.parent_platforms,
                      genres: gameInfo.genres,
                      tags: gameInfo.tags,
                      description_raw: gameInfo.description_raw,
                    })
                  )
                }
              >
                Add to Favorite
              </button>
              <span>{currentGameName}</span>
            </div>
            <div>
              <p>Metacritic: {gameInfo.metacritic}</p>
              <p>Released: {gameInfo.released}</p>
              <p>
                <img
                  src={gameInfo.background_image}
                  alt={gameInfo.name}
                  width="120px"
                />
              </p>
              <div width="50px">{gameInfo.dominant_color}</div>
              <p>Platforms: {gameInfo.parent_platforms.length}</p>
              <p>
                <strong> Genres:</strong>{" "}
                {gameInfo.genres.map((g) => g.name + ", ")}
              </p>
              <p>
                <strong>Tags:</strong> {gameInfo.tags.map((t) => t.name + ", ")}
              </p>
              <p>Description_raw: {gameInfo.description_raw}</p>
            </div>
          </div>
          <div className="gallery">
            <Gallery images={screenshots} />
          </div>
        </div>
      </div>
    </div>
  );
};

const GamewithRouter = withRouter(Game);
export default GamewithRouter;
