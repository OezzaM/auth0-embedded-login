import React from "react";
import { Link } from "react-router-dom";
import { lock } from "../auth/auth0Client";

const Header = (props) => {
  const logout = () => {
    lock.logout({ returnTo: window.origin.location });
  };
  return (
    <header>
      <h1>React Auth0 Embedded App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/private">Private</Link>
          </li>
          {!props?.isAuthenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {props?.isAuthenticated && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
