import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { rawgAPI } from "../../../api/api";
import { deleteFromFavorite, addToFavorite } from "../../../app/favoriteSlice";
import Gallery from "react-grid-gallery";
import s from "./Game.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import { getImageByKey } from "../../../helpers/getImageByKey";

const Game = (props) => {
  const dispatch = useDispatch();

  const [gameInfo, setGameInfo] = useState({
    id: null,
    name: "",
    slug: "",
    description: "",
    metacritic: null,
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

  const games = useSelector((state) => state.favorite.games);
  const isFavorite = games.find((el) => el.id === gameInfo.id);

  return (
    <div
      className={s.gameCardImage}
      style={{
        background: `linear-gradient(0deg, rgba(26,28,34,1) 10%, rgba(26,28,34,0.8) 50%, rgba(26,28,34,0.8) 50%, rgba(26,28,34,1) 90%), url(${gameInfo.background_image})`,
      }}
    >
      <div
        style={{
          background: `linear-gradient(90deg, rgba(26,28,34,1) 5%, rgba(26,28,34,0) 50%, rgba(26,28,34,0) 50%, rgba(26,28,34,1) 95%)`,
        }}
      >
        <div className={s.gameContent}>
          {gameInfo.name === "" ? <Preloader /> : ""}
          <div>
            <div className={s.flex}>
              <div className={s.whiteLabel}>{gameInfo.released}</div>
              <div className={s.gamePlatforms}>
                {gameInfo.parent_platforms.map((p) => (
                  <img
                    key={p.id}
                    src={getImageByKey(p.platform.slug)}
                    alt={p.platform.name}
                  />
                ))}
              </div>
              <div className={s.metacritic}>
                {gameInfo.metacritic ? (
                  <div>
                    Metacritic:
                    <span className={s.metacriticLabel}>
                      {gameInfo.metacritic}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={s.pageTitle}>
              {gameInfo.name}
              <span className={s.titleDot}>.</span>
            </div>

            <div className={s.description}>
              <p>
                <strong>Description: </strong>
                {gameInfo.description_raw}
              </p>
            </div>
          </div>
          <div className={s.gameInfoSidebar}>
            <div className={s.addToFavorite}>
              {isFavorite ? (
                <button
                  className={s.deleteFav}
                  aria-label="Delete from Favorite"
                  onClick={() =>
                    dispatch(
                      deleteFromFavorite({
                        id: gameInfo.id,
                      })
                    )
                  }
                >
                  Delete from Favorite
                </button>
              ) : (
                <button
                  aria-label="Add to Favorite"
                  onClick={() => dispatch(addToFavorite(gameInfo))}
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
