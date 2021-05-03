import React from 'react';
import './sidebar.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <nav className="nav">
        <navIcon to="#">
          <div className="user">
            <Link className="linkuser" to="#">ورود / عضویت</Link>
            <FaIcons.FaUserCircle className="usericon" />
          </div>
        </navIcon>
      </nav>
    </div>
  );
};

export default Sidebar;
