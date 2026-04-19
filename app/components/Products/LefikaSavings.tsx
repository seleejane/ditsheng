export default function LefikaSavings() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border">

          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Lefika Savings Account
          </h1>

          <p className="text-gray-600 mb-6">
            A disciplined fixed deposit savings plan designed to help you grow
            your money securely over time.
          </p>

          {/* Highlights */}
          <div className="space-y-4 mb-6">

            <div className="bg-green-100 text-green-700 p-4 rounded-xl">
              <p className="text-sm">Monthly Contribution</p>
              <p className="text-xl font-bold">P150.00</p>
            </div>

            <div className="bg-yellow-100 text-yellow-700 p-4 rounded-xl">
              <p className="text-sm">Interest Rate</p>
              <p className="text-xl font-bold">7.5% per annum</p>
            </div>

            <div className="bg-blue-100 text-blue-900 p-4 rounded-xl">
              <p className="text-sm">Duration</p>
              <p className="text-xl font-bold">36 Months</p>
            </div>

          </div>

          <button className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition">
            Start Fixed Savings
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
                <h3 className="font-semibold">Fixed Monthly Savings</h3>
                <p className="text-gray-600 text-sm">
                  Members contribute a minimum of P150.00 every month.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">No Early Withdrawals</h3>
                <p className="text-gray-600 text-sm">
                  Funds are locked for the full 36-month term to maximize growth.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Earn 7.5% Interest</h3>
                <p className="text-gray-600 text-sm">
                  Active deposits qualify for 7.5% annual interest.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Flexible Additions</h3>
                <p className="text-gray-600 text-sm">
                  Make additional deposits anytime during the month.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-full">✓</div>
              <div>
                <h3 className="font-semibold">Interest Payout Options</h3>
                <p className="text-gray-600 text-sm">
                  Receive interest in cash or reinvest into other savings products.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-red-100 text-red-700 p-2 rounded-full">!</div>
              <div>
                <h3 className="font-semibold">Important Restriction</h3>
                <p className="text-gray-600 text-sm">
                  Savings cannot be used as collateral or loan guarantees.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>

    </div>
  );
}