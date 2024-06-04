import React from 'react';

function Navbar() {
  return (
    <div className="w-44 bg-indigo-900 text-white flex flex-col h-lvh">
      <div className="flex items-center justify-center h-16">
        <p className="text-xl font-semibold">WATER 360</p>
      </div>
      <nav className="flex flex-col space-y-2 p-4">
        <a href="#dashboard" className="hover:bg-indigo-700 p-2 rounded">Dashboard</a>
        <a href="#budgets" className="hover:bg-indigo-700 p-2 rounded">Tenders</a>
        <a href="#events" className="hover:bg-indigo-700 p-2 rounded">Employees</a>
        <a href="#invoice" className="hover:bg-indigo-700 p-2 rounded">Invoice</a>
        <a href="#reports" className="hover:bg-indigo-700 p-2 rounded">Reports</a>
        <a href="#calendar" className="hover:bg-indigo-700 p-2 rounded">Calendar</a>
        <a href="#documents" className="hover:bg-indigo-700 p-2 rounded">Documents</a>
        
        
      </nav>
      <div className="mt-auto p-4 flex items-center">
        <img src='../../src/assets/bantiphoto.png' alt="Profile" className="w-10 h-10 rounded-full" />
        <div className="ml-4">
          <p>Banti DEV-X</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
