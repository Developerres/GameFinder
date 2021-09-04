import { useSelector } from "react-redux";
import { gameName } from "../../app/favoriteSlice";

const MyLibrary = () => {
  const currentGameName = useSelector(gameName);
  return <div>{currentGameName}</div>;
};

export default MyLibrary;
