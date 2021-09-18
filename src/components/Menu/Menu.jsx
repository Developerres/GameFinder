import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";
import { rawgAPI } from "./../../api/api";
import s from "./Menu.module.css";

export const Genres = ({ name, id, games_count, image_background }) => {
  return (
    <div className={s.genreItem}>
      <div
        className={s.genreIcon}
        style={{
          backgroundImage: `url(${image_background})`,
          backgroundRepeat: "no-repeat",
          width: "50px",
          height: "50px",
          backgroundSize: "cover",
        }}
        alt={"Name:" + name + "- ID: " + id + " - Count: " + games_count}
      ></div>
      <div className={s.genreTitle}>{name}</div>
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
      <div className={s.mainMenuTitle}>
        menu<span className="titleDot">.</span>
      </div>
      <div className={s.mainMenuItems}>
        <NavLink exact to="/" activeClassName={s.selected}>
          Home
        </NavLink>
        <NavLink to="/mylibrary" activeClassName={s.selected}>
          My Library
        </NavLink>
        <NavLink to="/lastgames" activeClassName={s.selected}>
          Last Games
        </NavLink>
      </div>
      <div className={s.mainMenuTitle}>
        genres<span className="titleDot">.</span>
      </div>
      <div className={s.genresList}>
        {genres.length === 0 ? <Preloader /> : ""}
        {genres.map((data) => (
          <NavLink
            to={`/genre/${data.slug}`}
            activeClassName={s.selected}
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
