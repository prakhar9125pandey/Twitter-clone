import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav>
      <h1>X</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li className="dropdown">
              <button onClick={toggleDropdown}>Settings</button>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/settings">Account Settings</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Settings</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
