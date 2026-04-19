export default function BojanalaSavings() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border">

          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Bojanala Savings Account
          </h1>

          <p className="text-gray-600 mb-6">
            A flexible savings solution with structured rules to help you stay
            consistent while maintaining access to your funds.
          </p>

          {/* Highlights */}
          <div className="space-y-4 mb-6">

            <div className="bg-green-100 text-green-700 p-4 rounded-xl">
              <p className="text-sm">Minimum Monthly Saving</p>
              <p className="text-xl font-bold">P200.00</p>
            </div>

            <div className="bg-blue-100 text-blue-900 p-4 rounded-xl">
              <p className="text-sm">Interest Rate</p>
              <p className="text-xl font-bold">5% per annum</p>
            </div>

            <div className="bg-orange-100 text-orange-700 p-4 rounded-xl">
              <p className="text-sm">Minimum Duration</p>
              <p className="text-xl font-bold">4 Months</p>
            </div>

          </div>

          <button className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition">
            Start Saving
          </button>
        </div>

        {/* RIGHT SIDE - BULLETS */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Product Features
          </h2>

          <ul className="space-y-6">

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Monthly Savings Discipline</h3>
                <p className="text-gray-600 text-sm">
                  Contributions should be made monthly, no later than the 31st.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Flexible Additions</h3>
                <p className="text-gray-600 text-sm">
                  Deposit additional funds at any time during the month.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-orange-100 text-orange-700 p-2 rounded-full">!</div>
              <div>
                <h3 className="font-semibold">Limited Withdrawals</h3>
                <p className="text-gray-600 text-sm">
                  Withdraw partially or fully up to two times per calendar year.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Minimum Saving Period</h3>
                <p className="text-gray-600 text-sm">
                  Maintain savings for at least four calendar months.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-green-100 text-green-700 p-2 rounded-full">%</div>
              <div>
                <h3 className="font-semibold">Earn Interest</h3>
                <p className="text-gray-600 text-sm">
                  Savings earn 5% annual interest (subject to review).
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-red-100 text-red-700 p-2 rounded-full">!</div>
              <div>
                <h3 className="font-semibold">Loan Guarantee Restriction</h3>
                <p className="text-gray-600 text-sm">
                  Funds cannot be used as collateral or loan guarantees.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-red-100 text-red-700 p-2 rounded-full">!</div>
              <div>
                <h3 className="font-semibold">Security Clause</h3>
                <p className="text-gray-600 text-sm">
                  The SACCOS may claim these savings in the event of loan default.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-gray-200 text-gray-700 p-2 rounded-full">i</div>
              <div>
                <h3 className="font-semibold">Interest Eligibility Note</h3>
                <p className="text-gray-600 text-sm">
                  Not eligible for surplus-based annual interest distributions.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>

    </div>
  );
}