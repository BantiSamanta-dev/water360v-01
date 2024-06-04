import React from 'react';


function Titlebar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow w-full h-12">
      <div className="flex space-x-4 justify-center items-center">
        <p className="text-lg font-semibold">Dashboard</p>
        <input type="text" placeholder="Search Events" className="border border-gray-300 py-2 px-4 rounded w-44 h-10" />
      </div>
      <button className="bg-indigo-600 text-white py-2 px-4 rounded ml-4">Excell</button>
     
        <button className="bg-indigo-600 text-white py-2 px-4 rounded">Add Tender</button>
      
      
    </div>
  );
}

export default Titlebar;



