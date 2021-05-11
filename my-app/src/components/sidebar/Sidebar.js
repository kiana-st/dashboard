import React, { useState, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import './sidebar.css';
import * as IoIcons from 'react-icons/io5';
import { Link } from 'react-router-dom';
import useDropdown from './SubMenu';
import { SidebarData } from './SidebarData';

function Sidebar(props) {
  /*----toggle  menu--start--*/
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  /*----toggle  menu--end--*/

  /*----toggle  submenu--start--*/

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  /*----toggle  submenu--end--*/

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
              <li key={index} className={item.cName} onClick={item.subNav && showSubnav}>
                <Link to={item.path} >
                  <span>
                    {item.title} {item.icon}
                  </span>
                  <span>
                    {item.subNav && subnav
                      ? item.iconOpened
                      : item.subNav
                      ? item.iconClosed
                      : null}
                  </span>
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

/*----toggle icon----start---*/
// const coutriesEl = useRef(null);
// const countriesDropEl = useRef(null);
// const [countriesDropOpen, toggleCountriesDrop] = useDropdown(
//   countriesDropEl,
//   coutriesEl
// );
// const onClick = () => toggleCountriesDrop();
/*----toggle icon----end---*/

{
  /* <div ref={coutriesEl} onClick={onClick}>
            <span>Countries</span>
            <span>{countriesDropOpen ? '▲' : '▼'}</span>
          </div>
          <div ref={countriesDropEl} hidden={countriesDropOpen}>
            <div>Greece</div>
            <div>Poland</div>
            <div>Spain</div>
          </div> */
}
