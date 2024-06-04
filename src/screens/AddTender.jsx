import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function AddTender() {
  const [form, setForm] = useState({
    entryDate: '',
    bidStartDate: '',
    closingDate: '',
    tenderId: '',
    tenderRefNo: '',
    title: '',
    organisationChain: '',
    emdAmount: '',
    tenderValue: '',
    typeOfBid: '',
    scopeOfWork: '',
    validity: '',
    tenderPlatform: '',
    state: '',
    status: '',
    remark: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/api/tenders', form); // Replace '/api/tenders' with your actual API endpoint
      console.log('Tender submitted successfully:', response.data);
      // Handle successful submission (e.g., clear form, show success message)
    } catch (error) {
      console.error('Error submitting tender:', error);
      // Handle submission errors (e.g., show error message)
    }
  };

  const resetForm = () => {
    setForm({
      entryDate: '',
      bidStartDate: '',
      closingDate: '',
      tenderId: '',
      tenderRefNo: '',
      title: '',
      organisationChain: '',
      emdAmount: '',
      tenderValue: '',
      typeOfBid: '',
      scopeOfWork: '',
      validity: '',
      tenderPlatform: '',
      state: '',
      status: '',
      remark: '',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tender Management</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <input
            type="text"
            name="entryDate"
            value={form.entryDate}
            onChange={handleChange}
            placeholder="Date of Entry/ Listing"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="bidStartDate"
            value={form.bidStartDate}
            onChange={handleChange}
            placeholder="bidStartDate"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="closingDate"
            value={form.closingDate}
            onChange={handleChange}
            placeholder="closingDate"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="tenderId"
            value={form.tenderId}
            onChange={handleChange}
            placeholder="tenderId"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="tenderRefNo"
            value={form.tenderRefNo}
            onChange={handleChange}
            placeholder="tenderRefNo"
            className="p-2 border rounded"
          />
         
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="title"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="organisationChain"
            value={form.organisationChain}
            onChange={handleChange}
            placeholder="organisationChain"
            className="p-2 border rounded"
          />
         
         <input
            type="text"
            name="emdAmount"
            value={form.emdAmount}
            onChange={handleChange}
            placeholder="emdAmount"
            className="p-2 border rounded"
          />
         
         <input
            type="text"
            name="tenderValue"
            value={form.tenderValue}
            onChange={handleChange}
            placeholder=" tenderValue"
            className="p-2 border rounded"
          />
         
         <input
            type="text"
            name="typeOfBid"
            value={form.typeOfBid}
            onChange={handleChange}
            placeholder="typeOfBid"
            className="p-2 border rounded"
          />
         
         <input
            type="text"
            name="scopeOfWork"
            value={form.scopeOfWork}
            onChange={handleChange}
            placeholder="scopeOfWork"
            className="p-2 border rounded"
          />
         
         <input
            type="text"
            name="validity"
            value={form.validity}
            onChange={handleChange}
            placeholder=" validity"
            className="p-2 border rounded"
          />
         <input
            type="text"
            name="tenderPlatform"
            value={form.tenderPlatform}
            onChange={handleChange}
            placeholder="tenderPlatform"
            className="p-2 border rounded"
          /><input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="state"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="status"
            value={form.status}
            onChange={handleChange}
            placeholder="status"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="remark"
            value={form.remark}
            onChange={handleChange}
            placeholder="remark"
            className="p-2 border rounded"
          />
         
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
          {isEditing ? 'Update Tender' : 'Add Tender'}
        </button>
        <button type="button" onClick={resetForm} className="bg-gray-500 text-white p-2 rounded mt-4 ml-4">
          Reset Form
        </button>
      </form>
    </div>
  );
}

export default AddTender;



