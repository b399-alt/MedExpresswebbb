import { useNavigate } from 'react-router-dom';

export default function SubscriptionCard({ plan, yearly = false }) {
  const navigate = useNavigate();
  const price = yearly ? plan.yearlyPrice : plan.price;
  const period = yearly ? 'year' : 'month';

  return (
    <div className={`relative bg-white rounded-2xl p-6 flex flex-col ${plan.cardClass}`}>
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          {plan.badge}
        </span>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-500 text-sm">/{period}</span>
        {yearly && (
          <div className="text-xs text-green-600 font-medium mt-1">
            Save ${((plan.price * 12) - plan.yearlyPrice).toFixed(2)}/year
          </div>
        )}
      </div>

      <button
        onClick={() => navigate('/signup')}
        className={`w-full py-2.5 rounded-xl font-semibold text-sm transition mb-6 ${plan.btnClass}`}
      >
        Get Started
      </button>

      <ul className="space-y-2.5 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
            {f}
          </li>
        ))}
        {plan.missing.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-gray-300 mt-0.5 flex-shrink-0">✗</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
