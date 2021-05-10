import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import './sidebar.css';
import * as IoIcons from 'react-icons/io5';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <IoIcons.IoChevronBackCircle onClick={showSidebar}  />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
        <li>
            <Link to="#">sssss</Link>
          </li>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <IoIcons.IoChevronForwardCircleSharp />
            </Link>
          </li>
        
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;