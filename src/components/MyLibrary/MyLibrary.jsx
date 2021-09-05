import { useDispatch, useSelector } from "react-redux";
import Games from "../Games/Games";

const MyLibrary = () => {
  const games = useSelector((state) => state.favorite.games);

  return (
    <div>
      <Games games={games} />
    </div>
  );
};

export default MyLibrary;
