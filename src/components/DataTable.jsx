import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTable() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/api/tenders') // Replace with your API endpoint
      .then(response => {
        setTenders(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border border-gray-200">Entry Date</th>
            <th className="py-2 px-4 border border-gray-200">Bid Start Date</th>
            <th className="py-2 px-4 border border-gray-200">Closing Date</th>
            <th className="py-2 px-4 border border-gray-200">Tender ID</th>
            <th className="py-2 px-4 border border-gray-200">Tender Ref No.</th>
            <th className="py-2 px-4 border border-gray-200">Title</th>
            <th className="py-2 px-4 border border-gray-200">Organisation Chain</th>
            <th className="py-2 px-4 border border-gray-200">EMD Amount</th>
            <th className="py-2 px-4 border border-gray-200">Tender Value</th>
            <th className="py-2 px-4 border border-gray-200">Type of Bid</th>
            <th className="py-2 px-4 border border-gray-200">Scope of Work</th>
            <th className="py-2 px-4 border border-gray-200">Validity</th>
            <th className="py-2 px-4 border border-gray-200">Tender Platform</th>
            <th className="py-2 px-4 border border-gray-200">State</th>
            <th className="py-2 px-4 border border-gray-200">Status</th>
            <th className="py-2 px-4 border border-gray-200">Remark</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map(tender => (
            <tr key={tender._id}>
              <td className="py-2 px-4 border border-gray-200">{tender.entryDate}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.bidStartDate}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.closingDate}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.tenderId}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.tenderRefNo}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.title}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.organisationChain}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.emdAmount}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.tenderValue}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.typeOfBid}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.scopeOfWork}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.validity}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.tenderPlatform}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.state}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.status}</td>
              <td className="py-2 px-4 border border-gray-200">{tender.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

