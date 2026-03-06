import { useState } from 'react';
import { PLANS } from '../constants/data';
import SubscriptionCard from '../components/SubscriptionCard';

const FAQS = [
  { q: 'Can I cancel anytime?', a: 'Yes! You can cancel your subscription at any time from your dashboard with no cancellation fees.' },
  { q: 'How does the discount work?', a: 'Your plan discount is automatically applied to every order you place while subscribed.' },
  { q: 'Can I switch plans?', a: 'Absolutely. You can upgrade or downgrade your plan at any time from your account settings.' },
  { q: 'Is there a free trial?', a: 'Yes! All new members get a 7-day free trial on the Standard plan. No credit card required.' },
];

export default function Subscriptions() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-3">Simple, Transparent Pricing</h1>
          <p className="text-blue-100 text-lg mb-8">Choose the plan that works for you. No hidden fees.</p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white/20 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${!yearly ? 'bg-white text-blue-700 shadow' : 'text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${yearly ? 'bg-white text-blue-700 shadow' : 'text-white'}`}
            >
              Yearly <span className="text-green-300 font-bold ml-1">Save 15%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map(plan => <SubscriptionCard key={plan.id} plan={plan} yearly={yearly} />)}
        </div>
        <p className="text-center text-gray-400 text-sm mt-6">All plans include a 7-day free trial · No credit card required to start</p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Plan Comparison</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left p-4 text-gray-600 font-semibold">Feature</th>
                {PLANS.map(p => (
                  <th key={p.id} className="p-4 text-gray-900 font-bold text-center">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Delivery', 'Standard (3-5d)', 'Priority (1-2d)', 'Same-day'],
                ['Medicine Discount', '5%', '15%', '25%'],
                ['Supplement Discount', '—', '10%', '20%'],
                ['Pharmacist Consultation', '—', '2×/month', 'Unlimited'],
                ['Customer Support', '24/7', '24/7 Priority', '24/7 VIP'],
                ['Order History', '✓', '✓', '✓'],
                ['Health Dashboard', '—', '—', '✓'],
              ].map(([feature, ...values]) => (
                <tr key={feature} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-4 text-gray-700 font-medium">{feature}</td>
                  {values.map((v, i) => (
                    <td key={i} className="p-4 text-center text-gray-600">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                <span className="text-gray-400 text-lg">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
