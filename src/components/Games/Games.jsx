import pc from "./../../assets/image/pc.svg";
import playstation from "./../../assets/image/playstation.svg";
import xbox from "./../../assets/image/xbox.svg";
import nintendo from "./../../assets/image/nintendo.svg";
import mac from "./../../assets/image/mac.svg";
import linux from "./../../assets/image/linux.svg";
import android from "./../../assets/image/android.svg";
import { NavLink } from "react-router-dom";

const Games = ({ games, pagesCount, currentPage }) => {
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

  return (
    <div className="gameCards">
      {games.map((data) => (
        <NavLink
          to={`/game/${data.slug}`}
          activeClassName="selected"
          key={data.id}
        >
          <div className="gameCard">
            <div
              className="gameCardImage"
              style={{
                backgroundImage: `url(${data.background_image})`,
                height: "280px",
              }}
            ></div>
            <div className="gameCardInfo">
              <div className="gamePlatforms">
                {data.parent_platforms.map((p) => (
                  <img
                    key={p.platform.id}
                    src={getImageByKey(p.platform.slug)}
                    alt={p.platform.name}
                  />
                ))}
              </div>

              <div className="gameRelease">Metacritic: {data.metacritic}</div>
            </div>
            <div className="gameTitle">{data.name}</div>
            <div className="gameCardGenre">
              {data.genres.map((g) => (
                <span key={g.id}> {g.name} </span>
              ))}
              {/* {data.genres.map((g) => g.name).join(", ")} */}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Games;
