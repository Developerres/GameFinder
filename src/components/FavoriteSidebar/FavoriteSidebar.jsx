import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const FavoriteSidebar = () => {
  const games = useSelector((state) => state.favorite.games);
  return (
    <div>
      {games.map((el) => (
        <NavLink to={`/game/${el.slug}`} activeClassName="selected">
          <div className="favoriteGames">
            <img src={el.background_image} alt={el.name} title={el.name} />
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default FavoriteSidebar;
