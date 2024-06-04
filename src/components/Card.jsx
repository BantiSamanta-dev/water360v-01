import React from 'react';

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
      <button className="bg-green-500 p-4 rounded-md h-28 w-full hover:bg-indigo-700 shadow-xl flex flex-col justify-between">
        <p className="text-white font-semibold">Active Tender</p>
        <p className="text-white font-bold text-2xl">10</p>
      </button>
      <button className="bg-gray-600 p-4 rounded-md h-28 w-full hover:bg-indigo-700 shadow-xl flex flex-col justify-between">
        <p className="text-white font-semibold">Past Tender</p>
        <p className="text-white font-bold text-2xl">52</p>
      </button>
      <button className="bg-red-600 p-4 rounded-md h-28 w-full hover:bg-indigo-700 shadow-xl flex flex-col justify-between">
        <p className="text-white font-semibold">Live Tender</p>
        <p className="text-white font-bold text-2xl">5</p>
      </button>
      <button className="bg-cyan-600 p-4 rounded-md h-28 w-full hover:bg-indigo-700 shadow-xl flex flex-col justify-between">
        <p className="text-white font-semibold">Rejected Tender</p>
        <p className="text-white font-bold text-2xl">2</p>
      </button>
    </div>
  );
}

export default Card;
