import React from 'react'
import Image from 'next/image';

function MoletloSavings() {
  return (
    <div className="dark:bg-gray-600 shadow-lg p-6">
      {/* HERO SECTION */}
      <section className="relative mx-4 my-4 p-4 rounded-2xl overflow-hidden shadow-lg dark:bg-gray-500">
        
          <h1 className="text-4xl font-bold mb-4">
            Moleto Savings Account
          </h1>
          <p className="text-lg mb-6 max-w-2xl">
            Build disciplined savings habits and grow your money with structured contributions. This savings scheme is reserved for Government employees and parastatal employees.
          </p>
          
      </section>

      {/* FEATURES + PRODUCT CARD */}
      <section className="py-12 px-6 grid md:grid-cols-2 gap-8 dark:bg-gray-300 rounded-2xl shadow-lg">

        {/* LEFT - FEATURES */}
        <div className="flex flex-col justify-center dark:bg-gray-400 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Moleto Savings?
          </h2>

          <div className="space-y-4">
            {[
              "Exclusive to Ditsheng Saccos members",
              "Encourages disciplined monthly savings",
              "Earn interest on your contributions",
              "Structured withdrawal after 12 months"
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow flex items-start gap-3 dark:bg-gray-600"
              >
                <div className="text-green-500 text-xl">✓</div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - PRODUCT CARD */}
        <div className="flex items-center">
          <div className="w-full bg-white p-8 rounded-2xl shadow-lg border dark:bg-gray-500">

            <h3 className="text-xl font-bold mb-4 text-center">
              Moleto Savings Details
            </h3>

            <div className="space-y-4 text-gray-700 dark:text-white">

              <div className="flex justify-between">
                <span>Monthly Savings</span>
                <span className="font-semibold text-green-600">
                  P200.00
                </span>
              </div>

              <div className="flex justify-between">
                <span>Withdrawal Period</span>
                <span className="font-semibold">
                  After 12 Months
                </span>
              </div>

              <div className="flex justify-between">
                <span>Eligibility</span>
                <span className="font-semibold">
                  Members Only
                </span>
              </div>

            </div>

            <button className="w-full mt-6 bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition">
              Open Account
            </button>

          </div>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="py-4 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Become a Member",
            "Apply for Moleto Account",
            "Save Monthly (P200)",
            "Withdraw After 12 Months"
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow dark:bg-gray-700 dark:text-white">
              <div className="text-blue-900 text-xl font-bold mb-2 dark:text-white">
                {i + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-4 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Start Your Moleto Savings Journey Today
        </h2>

        <div className="space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-xl">
            Apply Now
          </button>
          <button className="border px-6 py-3 rounded-xl">
            Contact Us
          </button>
        </div>
      </section>

    </div>
  )
}

export default MoletloSavings

