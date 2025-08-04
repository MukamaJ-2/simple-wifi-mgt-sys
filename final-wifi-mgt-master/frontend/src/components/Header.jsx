import React from 'react';
import ucuLogo from '../assets/ucu-logo.png'; // Make sure to add the logo image to this path

const Header = () => (
  <header className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
    <img src={ucuLogo} alt="UCU Logo" className="h-20 w-auto" />
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">UGANDA CHRISTIAN UNIVERSITY</h1>
      <p className="text-pink-700 dark:text-pink-300 text-lg font-medium mt-1">A Centre of Excellence in the Heart of Africa</p>
    </div>
  </header>
);

export default Header;