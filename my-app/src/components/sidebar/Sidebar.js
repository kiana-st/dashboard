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
          <IoIcons.IoChevronBackSharp onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineDashboard />
            </Link>
          </li>
          <li>
            <Link to="#">sssss</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;

// <Link>
// <FaIcons.FaGrinWink className="smileicon" />
// </Link>
// <nav className={sidebar ? 'nav-bar active' : 'nav-menue'}>
// <ul className="nav-menu-items">
//   <li className="navbar-toggle">
//     <Link to="#"> داشبورد</Link>
//   </li>
//   <li>
//     <Link to="#">اپلیکیشن ها</Link>
//   </li>
//   <li>
//     <Link to="#">مدیریت ها</Link>
//   </li>
//   <li>
//     <Link to="#">گزارشات</Link>
//   </li>
// </ul>
// </nav>
// <Link to="#" className="toggle" onClick={showSidebar}>
// <IoIcons.IoChevronBackSharp />
// </Link>
// <Link to="#" className="toggle">
// <AiIcons.AiOutlineDashboard />
// </Link>
