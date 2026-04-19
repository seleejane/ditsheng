"use client";

import React from "react";

export default function MembershipApplication() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">

        {/* LEFT SIDE - FORM (75%) */}
        <div className="w-full md:w-3/4 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">
            Membership Application
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter full name"
              />
            </div>

            {/* National ID */}
            <div>
              <label className="block text-sm font-medium">National ID</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter ID"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select className="w-full mt-1 p-2 border rounded-lg">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter email"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">
                Residential Address
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter address"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter city"
              />
            </div>

            {/* Postal Code */}
            <div>
              <label className="block text-sm font-medium">
                Postal Code
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter postal code"
              />
            </div>

            {/* Next of Kin */}
            <div>
              <label className="block text-sm font-medium">
                Next of Kin
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter next of kin"
              />
            </div>

            {/* Next of Kin Phone */}
            <div>
              <label className="block text-sm font-medium">
                Next of Kin Phone
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter phone"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - DOCUMENT UPLOAD (25%) */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Upload Documents
          </h2>

          <div className="space-y-4">

            {/* ID Upload */}
            <div>
              <label className="block text-sm font-medium">
                National ID Copy
              </label>
              <input
                type="file"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            {/* Proof of Address */}
            <div>
              <label className="block text-sm font-medium">
                Proof of Address
              </label>
              <input
                type="file"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            {/* Passport Photo */}
            <div>
              <label className="block text-sm font-medium">
                Passport Photo
              </label>
              <input
                type="file"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}