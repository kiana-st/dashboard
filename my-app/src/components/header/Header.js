import React from 'react';
import './header.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="nav">
          <div className="user">
            <Link className="linkuser" to="#">
              ورود / عضویت
            </Link>
            <FaIcons.FaUserCircle className="usericon" />
          </div>
      </header>
    </div>
  );
}

export default Header;
