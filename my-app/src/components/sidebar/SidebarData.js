import React from 'react';
import * as FIIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as LoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';
import * as IoIcons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  // {
  //   titleSmile: 'general',
  //   iconSmile: <FaIcons.FaGrinWink />,
  //   iconUser: <FaIcons.FaUserCircle />,
  //   iconToggle: <IoIcons.IoChevronBackSharp />,
  //   iconUp: <FaIcons.FiMenu />,
  // },
  {
    name: '',
    title: 'داشبورد',
    path: '/',
    icon: <AiIcons.AiOutlineDashboard />,
    iconClosed: '',
    iconOpened: '',
    cName: 'nav-text',
  },

  {
    name: 'مدیریت',
    title: 'اپلیکیشن ها',
    path: '/application',
    icon: <LoIcons.IoMdSettings />,
    iconOpened: <FIIcons.FiChevronLeft />,
    iconClosed: <BiIcons.BiChevronDown />,
    cName: 'nav-text',
    subNav: [
      {
        name: 'اپلیکیشن ها',
        title: 'همه اپلیکیشن ها',
        path: '/application/allApp',
      },
      {
        name: '',
        title: 'اپلیکیشن های من',
        path: '/application/myapp',
      },
    ],
  },
  {
    name: '',
    title: 'مدیریت',
    path: '/manager',
    icon: <AiIcons.AiFillTool />,
    iconOpened: <FIIcons.FiChevronLeft />,
    iconClosed: <BiIcons.BiChevronDown />,
    cName: 'nav-text',
    subNav: [
      {
        name: 'کدهای فعال سازی:',
        title: 'مدیریت',
        path: '/manager/mypincode',
      },
      {
        name: 'سخت افزارها',
        title: 'سخت افزارهای من',
        path: '/manager/myhardware',
      },
    ],
  },
  {
    name: 'گزارشات',
    title: 'گزارشات',
    path: '/reports',
    icon: <HiIcons.HiFolder />,
    iconOpened: <FIIcons.FiChevronLeft />,
    iconClosed: <BiIcons.BiChevronDown />,
    cName: 'nav-text',
    subNav: [
      {
        name: 'پرداخت ها',
        title: 'گزارش پرداخت ها',
        path: '/reports/reportPills',
      },
      {
        name: 'کاربران',
        title: 'تیکت ها',
        path: '/reports/tickets',
      },
      {
        name: '',
        title: 'پروفایل من',
        path: '/reports/myprofile',
      },
    ],
  },
];
