import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import { useAuth } from "../store/auth";

export const Navbar = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Akash Sites</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
