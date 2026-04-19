export default function RetirementSavings() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - CARD */}
        <div className="bg-gradient-to-br from-purple-700 to-blue-900 text-white rounded-3xl shadow-xl p-8">

          <h1 className="text-3xl font-bold mb-4">
            Retirement Savings
          </h1>

          <p className="text-gray-200 mb-6">
            Build a strong financial foundation for your golden years with a
            secure, long-term savings plan designed for peace of mind.
          </p>

          {/* Highlights */}
          <div className="space-y-4 mb-6">

            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-sm">Minimum Contribution</p>
              <p className="text-xl font-bold">P100.00</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-sm">Interest Rate</p>
              <p className="text-xl font-bold">8% per annum</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-sm">Type</p>
              <p className="text-xl font-bold">Long-Term Fixed Savings</p>
            </div>

          </div>

          <button className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition">
            Start Retirement Plan
          </button>
        </div>

        {/* RIGHT SIDE - BULLETS */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Product Features
          </h2>

          <ul className="space-y-6">

            <li className="flex items-start gap-4">
              <div className="bg-green-100 text-green-700 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Long-Term Wealth Building</h3>
                <p className="text-gray-600 text-sm">
                  Designed to help you grow your savings steadily for retirement.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-green-100 text-green-700 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Affordable Contributions</h3>
                <p className="text-gray-600 text-sm">
                  Start saving with as little as P100.00.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">%</div>
              <div>
                <h3 className="font-semibold">High Interest Returns</h3>
                <p className="text-gray-600 text-sm">
                  Earn 8% annual interest on your savings.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Secure Fixed Savings</h3>
                <p className="text-gray-600 text-sm">
                  Funds are securely held in a long-term fixed deposit structure.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-red-100 text-red-700 p-2 rounded-full">!</div>
              <div>
                <h3 className="font-semibold">Loan Restriction</h3>
                <p className="text-gray-600 text-sm">
                  Savings cannot be used as collateral for loans.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>

    </div>
  );
}