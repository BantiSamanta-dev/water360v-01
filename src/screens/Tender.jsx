import React from 'react';
import Navbar from '../components/Navbar';
import Titlebar from './Titlebar';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import AddTender from './AddTender';

function Tender() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 overflow-hidden"> {/* Add overflow-hidden to prevent DataTable from affecting other content */}
        <Titlebar />
        <Card />
        <div className="overflow-y-auto h-full"> {/* Add a scrollable container for DataTable */}
          <DataTable />
          <AddTender/>
        </div>
      </div>
    </div>
  );
}

export default Tender;

