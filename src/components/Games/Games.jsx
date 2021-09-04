import pc from "./../../assets/image/pc.svg";
import playstation from "./../../assets/image/playstation.svg";
import xbox from "./../../assets/image/xbox.svg";
import nintendo from "./../../assets/image/nintendo.svg";
import mac from "./../../assets/image/mac.svg";
import linux from "./../../assets/image/linux.svg";
import { NavLink } from "react-router-dom";

const Games = ({ games }) => {
  return (
    <div className="gameCards">
      {games.map((data) => (
        <NavLink to={`/game/${data.slug}`} activeClassName="selected">
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
                <img src={pc} alt={data.name} />
                <img src={playstation} alt={data.name} />
                <img src={xbox} alt={data.name} />
                <img src={nintendo} alt={data.name} />
                <img src={mac} alt={data.name} />
                <img src={linux} alt={data.name} />
              </div>

              <div className="gameRelease">Metacritic: {data.metacritic}</div>
            </div>
            <div className="gameTitle">{data.name}</div>
            <div className="gameCardGenre">
              {data.genres.map((g) => g.name).join(", ")}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Games;
