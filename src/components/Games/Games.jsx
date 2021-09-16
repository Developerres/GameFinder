import pc from "./../../assets/image/pc.svg";
import playstation from "./../../assets/image/playstation.svg";
import xbox from "./../../assets/image/xbox.svg";
import nintendo from "./../../assets/image/nintendo.svg";
import mac from "./../../assets/image/mac.svg";
import linux from "./../../assets/image/linux.svg";
import android from "./../../assets/image/android.svg";
import ios from "./../../assets/image/ios.svg";
import web from "./../../assets/image/web.svg";
import { NavLink } from "react-router-dom";
import s from "./Games.module.css";

const Games = ({ games, pagesCount, currentPage }) => {
  const images = {
    pc,
    playstation,
    xbox,
    nintendo,
    mac,
    linux,
    android,
    ios,
    web,
  };

  function getImageByKey(key) {
    return images[key];
  }

  return (
    <div className={s.gameCards}>
      {games.map((data) => (
        <NavLink
          to={`/game/${data.slug}`}
          activeClassName="selected"
          key={data.id}
        >
          <div className={s.gameCard}>
            <div
              className={s.gameCardImage}
              style={{
                backgroundImage: `url(${data.background_image})`,
                height: "280px",
              }}
            ></div>
            <div className={s.gameCardInfo}>
              <div className={s.gamePlatforms}>
                {data.parent_platforms.map((p) => (
                  <img
                    key={p.platform.id}
                    src={getImageByKey(p.platform.slug)}
                    alt={p.platform.name}
                  />
                ))}
              </div>

              {data.metacritic ? (
                <div className={s.metacritic}>
                  Metacritic: {data.metacritic}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={s.gameTitle}>{data.name}</div>
            <div className={s.gameCardGenre}>
              {data.genres.map((g) => (
                <span key={g.id}> {g.name} </span>
              ))}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Games;
