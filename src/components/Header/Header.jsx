import { NavLink } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/business"}>Business</NavLink>
          </li>
          <li>
            <NavLink to={"/entertainment"}>Entertainment</NavLink>
          </li>
          <li>
            <NavLink to={"/general"}>General</NavLink>
          </li>
          <li>
            <NavLink to={"/health"}>Health</NavLink>
          </li>
          <li>
            <NavLink to={"/science"}>Science</NavLink>
          </li>
          <li>
            <NavLink to={"/sports"}>Sports</NavLink>
          </li>
          <li>
            <NavLink to={"/technology"}>Technology</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
