import { NavLink } from "react-router-dom";

const Logo = (props) => {
  return (
    <NavLink to="/">
      <div className="logo">
        gamesfinder<span className="logoDot">.</span>
      </div>
    </NavLink>
  );
};

export default Logo;
