import { NavLink } from "react-router-dom";

const FavoriteSidebar = () => {
  const favoriteGames = JSON.parse(localStorage.getItem("favorite"));

  console.log("FavGames from sideb>>>", favoriteGames);

  if (!favoriteGames) return;
  return (
    <div>
      {favoriteGames.map((el) => (
        <NavLink
          to={`/game/${el.slug}`}
          activeClassName="selected"
          key={el.gameId}
        >
          <div className="favoriteGames">
            <img src={el.background_image} alt={el.name} title={el.name} />
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default FavoriteSidebar;
