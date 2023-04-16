import "./Header.css";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <NavLink className="hero" to="/">
          Finding Falcone
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
