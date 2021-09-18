import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToFavorite } from "../../app/favoriteSlice";
import s from "./FavoriteSidebar.module.css";

const FavoriteSidebar = () => {
  const dispatch = useDispatch();
  const favArray = JSON.parse(localStorage.getItem("favorite"));
  if (favArray && favArray.length !== 0) {
    favArray.map((el) => dispatch(addToFavorite(el)));
  }
  const favoriteGames = useSelector((state) => state.favorite.games);

  if (!favoriteGames) return;
  return (
    <>
      {favoriteGames.map((el) => (
        <NavLink to={`/game/${el.slug}`} activeClassName="selected" key={el.id}>
          <div className={s.favoriteGames}>
            <img src={el.background_image} alt={el.name} title={el.name} />
          </div>
        </NavLink>
      ))}
    </>
  );
};

export default FavoriteSidebar;
