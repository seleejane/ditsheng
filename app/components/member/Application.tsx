"use client";

import { useState } from "react";

export default function KYCForm() {
  const [formData, setFormData] = useState({
    applicationId: "",
    nationalId: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    phoneNumber: "",
    alternativePhoneNumber: "",
    residentialAddress: "",
    city: "",
    postalCode: "",
    nextOfKin: "",
    nextOfKinPhoneNumber: "",
    nextOfKinRelationship: "",
    documentUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting:", formData);

    // TODO: Send to API
    // await fetch("/api/kyc", { method: "POST", body: JSON.stringify(formData) });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Membership Application</h2>
    <form onSubmit={handleSubmit} className="flex flex-col max-w-3xl mx-4 p-4 bg-white shadow rounded-xl space-y-4">
      

      {/* Personal Info */}
      <input name="applicationId" placeholder="Application ID" onChange={handleChange} className="input" required />
      <input name="nationalId" placeholder="National ID" onChange={handleChange} className="input" required />
      
      <input type="date" name="dateOfBirth" onChange={handleChange} className="input" required />

      <select name="gender" onChange={handleChange} className="input" required>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select name="maritalStatus" onChange={handleChange} className="input" required>
        <option value="">Marital Status</option>
        <option>Single</option>
        <option>Married</option>
        <option>Divorced</option>
      </select>

      <input name="nationality" placeholder="Nationality" onChange={handleChange} className="input" required />

      {/* Contact */}
      <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="input" required />
      <input name="alternativePhoneNumber" placeholder="Alternative Phone Number" onChange={handleChange} className="input" />

      {/* Address */}
      <input name="residentialAddress" placeholder="Residential Address" onChange={handleChange} className="input" required />
      <input name="city" placeholder="City" onChange={handleChange} className="input" required />
      <input name="postalCode" placeholder="Postal Code" onChange={handleChange} className="input" required />

      {/* Next of Kin */}
      <input name="nextOfKin" placeholder="Next of Kin" onChange={handleChange} className="input" required />
      <input name="nextOfKinPhoneNumber" placeholder="Next of Kin Phone" onChange={handleChange} className="input" required />
      <input name="nextOfKinRelationship" placeholder="Relationship" onChange={handleChange} className="input" required />

      {/* Document */}
      <input name="documentUrl" placeholder="Document URL" onChange={handleChange} className="input" required />

      {/* Submit */}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Submit Application
      </button>
    </form>
   </div> 
  );
}