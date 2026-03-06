import { useNavigate } from 'react-router-dom';

const ORDERS = [
  { id: '#ORD-1042', date: 'Feb 28, 2025', items: 'Paracetamol 500mg × 2', status: 'Delivered', total: 9.98 },
  { id: '#ORD-1039', date: 'Feb 14, 2025', items: 'Vitamin D3 + Omega-3', status: 'Delivered', total: 29.98 },
  { id: '#ORD-1031', date: 'Jan 30, 2025', items: 'Multivitamin Complex', status: 'Delivered', total: 22.99 },
];

const STATUS_CLASSES = {
  Delivered: 'bg-green-100 text-green-700',
  Processing: 'bg-yellow-100 text-yellow-700',
  Shipped: 'bg-blue-100 text-blue-700',
};

const QUICK_ACTIONS = [
  { icon: '🛒', label: 'Shop Now', path: '/shop', color: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
  { icon: '📦', label: 'Track Order', path: '/dashboard', color: 'bg-purple-50 hover:bg-purple-100 text-purple-700' },
  { icon: '💳', label: 'My Plan', path: '/subscriptions', color: 'bg-teal-50 hover:bg-teal-100 text-teal-700' },
  { icon: '👤', label: 'Profile', path: '/profile', color: 'bg-orange-50 hover:bg-orange-100 text-orange-700' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-4 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-blue-200 text-sm mb-1">Welcome back,</p>
            <h1 className="text-2xl font-bold">My Dashboard</h1>
          </div>
          <button onClick={handleLogout} className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-xl transition font-medium">
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Subscription Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Active Plan</span>
            <h2 className="text-2xl font-bold mt-2">Standard Plan</h2>
            <p className="text-blue-100 text-sm mt-1">Renews on March 28, 2025 · $19.99/month</p>
            <div className="flex gap-4 mt-3 text-sm">
              <span>✓ 15% off medicines</span>
              <span>✓ Priority delivery</span>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => navigate('/subscriptions')} className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-xl text-sm hover:bg-blue-50 transition">
              Upgrade Plan
            </button>
            <button className="border border-white/50 text-white px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition">
              Manage
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '📦', label: 'Total Orders', value: '12', sub: 'All time' },
            { icon: '💰', label: 'Total Savings', value: '$48.50', sub: 'With subscription' },
            { icon: '🚚', label: 'Next Delivery', value: '2 days', sub: 'Est. March 8' },
            { icon: '⭐', label: 'Loyalty Points', value: '340 pts', sub: '$3.40 credit' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <span className="text-2xl">{s.icon}</span>
              <p className="text-xs text-gray-400 mt-2">{s.label}</p>
              <p className="text-xl font-bold text-gray-900 mt-1">{s.value}</p>
              <p className="text-xs text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {QUICK_ACTIONS.map(a => (
              <button
                key={a.label}
                onClick={() => navigate(a.path)}
                className={`${a.color} rounded-2xl p-5 flex flex-col items-center gap-2 transition`}
              >
                <span className="text-3xl">{a.icon}</span>
                <span className="text-sm font-semibold">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
            <button className="text-blue-600 text-sm hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 text-gray-500 font-medium">Order ID</th>
                  <th className="px-6 py-3 text-gray-500 font-medium">Items</th>
                  <th className="px-6 py-3 text-gray-500 font-medium">Date</th>
                  <th className="px-6 py-3 text-gray-500 font-medium">Total</th>
                  <th className="px-6 py-3 text-gray-500 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {ORDERS.map(order => (
                  <tr key={order.id} className="border-t border-gray-50 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-blue-600">{order.id}</td>
                    <td className="px-6 py-4 text-gray-700">{order.items}</td>
                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_CLASSES[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
