import React from 'react';
import {
  FaBell,
  FaFileInvoice,
  FaHotel,
  FaMoneyBill,
  FaRegFileAlt,
} from 'react-icons/fa';
import { HiOutlineBell } from 'react-icons/hi';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdDashboard,
  MdOutlineBarChart,
} from 'react-icons/md';
import { LuHotel, LuSettings } from 'react-icons/lu';

import { RiDashboardFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import { TbFileInvoice } from 'react-icons/tb';
import { FaSackDollar } from 'react-icons/fa6';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: 'dashboard',
    icon: <RiDashboardFill className="h-6 w-6" />,
  },
  {
    name: 'Manajemen Data Wisatawan Asing (WNA)',
    layout: '/admin',
    path: 'dashboard1',
    icon: <MdOutlineBarChart className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Rekonsilisasi Keuangan',
    layout: '/admin',
    icon: <FaSackDollar className="h-6 w-6" />,
    path: 'dashboard2',
  },
  {
    name: 'Monitoring & Logging (Audit Trail)',
    layout: '/admin',
    icon: <TbFileInvoice className="h-6 w-6" />,
    path: 'dashboard3',
  },
  {
    name: 'Integrasi & Pengelolaan DTW/Hotel',
    layout: '/admin',
    path: 'dashboard4',
    icon: <LuHotel className="h-6 w-6" />,
  },
  {
    name: 'Notifikasi Otomatis',
    layout: '/admin',
    path: 'dashboard5',
    icon: <HiOutlineBell className="h-6 w-6" />,
  },
  {
    name: 'Laporan & Analitik',
    layout: '/admin',
    path: 'dashboard6',
    icon: <FaRegFileAlt className="h-6 w-6" />,
  },
  {
    name: 'Pengaturan Admin',
    layout: '/admin',
    path: 'dashboard7',
    icon: <LuSettings className="h-6 w-6" />,
  },
];
export default routes;
