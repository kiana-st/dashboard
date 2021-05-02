import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as LoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
  {
    title: 'SmileIcon',
    icon: <FaIcons.FaGrinWink />,
    subNav: [
      {
        iconDashboard: <AiIcons.AiOutlineDashboard />,
        iconSetting: <LoIcons.IoMdSettings />,
        iconTool: <AiIcons.AiFillTool />,
        iconDoc: <HiIcons.HiFolder />,
       
      },
    ],
  },
];
