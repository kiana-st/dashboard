import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as LoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';
import * as IoIcons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    titleSmile: 'general',
    iconSmile: <FaIcons.FaGrinWink />,
    iconUser: <FaIcons.FaUserCircle />,
    iconToggle: <IoIcons.IoChevronBackSharp />,
    iconUp: <FaIcons.FiMenu />,
  },

  {
    title: 'داشبورد',
    iconDashboard: <AiIcons.AiOutlineDashboard />,
  },

  {
    name: 'مدیریت',
    title1: 'اپلیکیشن ها',
    title2: 'مدیریت',
    path: './اپلیکیشن ها',
    iconSetting: <LoIcons.IoMdSettings />,
    iconTool: <AiIcons.AiFillTool />,
    iconOpened: <FaIcons.FiChevronLeft />,
    iconClosed: <BiIcons.BiChevronDown />,
    subNavApp: [
      {
        title: 'همه اپلیکیشن ها',
        path: './همه اپلیکیشن ها/اپلیکیشن ها/اپلیکیشن ها/مدیریت',
      },
      {
        title: 'اپلیکیشن های من',
        path: './اپلیکیشن های من/اپلیکیشن ها/اپلیکیشن ها/مدیریت',
      },
    ],
    subNavTool: [
      {
        name: ':کدهای فعال سازی',
        title: 'پین کدهای من',
        path: './پین کدهای من/کدهای فعال سازی/مدیریت/مدیریت',
      },
      {
        name: ':سخت افزارها',
        title: 'سخت افزارهای من',
        path: './سخت افزارهای من/سخت افزارها/مدیریت/مدیریت/',
      },
    ],
  },

  {
    name: 'گزارشات',
    title: 'گزارشات',
    iconDoc: <HiIcons.HiFolder />,
    iconOpen: <FaIcons.FiChevronLeft />,
    iconOpened: <FaIcons.FiChevronLeft />,
    iconClosed: <BiIcons.BiChevronDown />,
    subNavDoc: [
      {
        name: 'پرداخت ها',
        title: 'گزارش پرداخت ها',
        path: './گزارش پرداخت ها/پرداخت ها/گزارشات/گزارشات',
      },
      {
        name: 'کاربران',
        title1: 'تیکت ها',
        title2: 'پروفایل من',
        path: './پروفایل من/کاربران/گزارشات/گزارشات',
      },
    ],
  },
];
