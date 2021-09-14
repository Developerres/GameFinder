import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { rawgAPI } from "../../../api/api";
import { deleteFromFavorite, addToFavorite } from "../../../app/favoriteSlice";
import pc from "./../../../assets/image/pc.svg";
import playstation from "./../../../assets/image/playstation.svg";
import xbox from "./../../../assets/image/xbox.svg";
import nintendo from "./../../../assets/image/nintendo.svg";
import mac from "./../../../assets/image/mac.svg";
import linux from "./../../../assets/image/linux.svg";
import android from "./../../../assets/image/android.svg";
import Gallery from "react-grid-gallery";

const Game = (props) => {
  const dispatch = useDispatch();

  const [gameInfo, setGameInfo] = useState({
    name: "",
    slug: "",
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

      // Load screenshots

      const responseScreenshots = await rawgAPI.getGameScreenshotsAPI(gameId);
      if (responseScreenshots.data)
        setGameScreenshots(responseScreenshots.data.results);
    };
    fetchGamesInfo();
  }, [props.match.params.gameId]);

  const screenshots = gameScreenshots.map((s) => ({
    src: `${s.image}`,
    thumbnail: `${s.image}`,
    caption: `${gameInfo.name} - ${gameInfo.id}`,
    thumbnailWidth: 200,
    thumbnailHeight: 112,
  }));

  const images = {
    pc,
    playstation,
    xbox,
    nintendo,
    mac,
    linux,
    android,
  };

  function getImageByKey(key) {
    return images[key];
  }

  const games = useSelector((state) => state.favorite.games);
  const isFavorite = games.find((el) => el.gameId === gameInfo.id);

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
                    key={p.id}
                    src={getImageByKey(p.platform.slug)}
                    alt={p.platform.name}
                  />
                ))}
              </div>
              <div className="metacritic">
                {gameInfo.metacritic ? (
                  <div>
                    Metacritic:
                    <span className="metacriticLabel">
                      {gameInfo.metacritic}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="pageTitle">
              {gameInfo.name}
              <span className="titleDot">.</span>
            </div>

            <div className="description">
              <p>
                <strong>Description: </strong>
                {gameInfo.description_raw}
              </p>
            </div>
          </div>
          <div className="gameInfoSidebar">
            <div className="addToFavorite">
              {isFavorite ? (
                <button
                  className="deleteFav"
                  aria-label="Delete from Favorite"
                  onClick={() =>
                    dispatch(
                      deleteFromFavorite({
                        gameId: gameInfo.id,
                      })
                    )
                  }
                >
                  Delete from Favorite
                </button>
              ) : (
                <button
                  aria-label="Add to Favorite"
                  onClick={() =>
                    dispatch(
                      addToFavorite({
                        gameId: gameInfo.id,
                        name: gameInfo.name,
                        slug: gameInfo.slug,
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
              )}
            </div>
            <div>
              <img src={gameInfo.background_image} alt={gameInfo.name} />
            </div>
            <div>
              <strong>Genres: </strong>
              {gameInfo.genres.map((g) => g.name + "   ")}
            </div>
            <div>
              <strong>Tags:</strong> {gameInfo.tags.map((t) => t.name + "  ")}
            </div>
          </div>
        </div>
        <div>
          <Gallery images={screenshots} />
        </div>
      </div>
    </div>
  );
};

const GamewithRouter = withRouter(Game);
export default GamewithRouter;
