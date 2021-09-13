import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { rawgAPI } from "./../../api/api";

export const Genres = ({ name, id, games_count, image_background }) => {
  return (
    <div className="genreItem">
      <div
        className="genreIcon"
        style={{
          backgroundImage: `url(${image_background})`,
          backgroundRepeat: "no-repeat",
          width: "50px",
          height: "50px",
          backgroundSize: "cover",
        }}
        alt={"Name:" + name + "- ID: " + id + " - Count: " + games_count}
      ></div>
      <div className="genreTitle">{name}</div>
    </div>
  );
};

const Menu = (props) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await rawgAPI.getGenresAPI();
      if (response.data.results) setGenres(response.data.results);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="mainMenuTitle">
        menu<span className="titleDot">.</span>
      </div>
      <div className="mainMenuItems">
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/mylibrary" activeClassName="selected">
          My Library
        </NavLink>
        <NavLink to="/lastgames" activeClassName="selected">
          Last Games
        </NavLink>
      </div>
      <div className="mainMenuTitle">
        genres<span className="titleDot">.</span>
      </div>
      <div className="genresList">
        {genres.map((data) => (
          <NavLink
            to={`/genre/${data.slug}`}
            activeClassName="selected"
            key={data.id}
          >
            <Genres
              key={data.id}
              name={data.name}
              id={data.id}
              games_count={data.games_count}
              image_background={data.image_background}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
