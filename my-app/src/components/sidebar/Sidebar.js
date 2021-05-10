import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import './sidebar.css';
import * as IoIcons from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import { SidebarData } from './SidebarData';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <IoIcons.IoChevronBackCircle onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="smileicon">
            <Link to="#">
              <FaIcons.FaGrinWink />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                  {item.icon}
                  {item.iconOpened}
                </Link>
              </li>
            );
          })}
          <li className="navbar-toggle" onClick={showSidebar}>
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
