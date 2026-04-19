export default function OrdinarySavings() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      {/* Section Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Ordinary Savings
          </h1>

          <p className="text-gray-600 mb-6">
            A simple and secure way to grow your savings while enjoying
            membership benefits.
          </p>

          {/* Highlight */}
          <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-6">
            <p className="text-sm">Minimum Savings</p>
            <p className="text-2xl font-bold">P100.00</p>
          </div>

          <button className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition">
            Apply Now
          </button>
        </div>

        {/* RIGHT SIDE - BULLETS */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Product Features
          </h2>

          <ul className="space-y-6">

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Membership Requirement</h3>
                <p className="text-gray-600 text-sm">
                  You must first become a registered member to access this product.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Application Process</h3>
                <p className="text-gray-600 text-sm">
                  Complete a Membership Application Form and KYC form.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Required Documents</h3>
                <p className="text-gray-600 text-sm">
                  Submit a certified copy of your Omang and proof of employment.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Affordable Entry</h3>
                <p className="text-gray-600 text-sm">
                  Start saving with as little as P100.00.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>

    </div>
  );
}