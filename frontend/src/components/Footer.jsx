import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💊</span>
              <span className="text-xl font-bold text-white">MedExpress</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted subscription-based medicine delivery platform. Genuine products, licensed pharmacists.
            </p>
            <div className="flex gap-3 mt-4">
              {['📘', '🐦', '📸', '▶️'].map((icon, i) => (
                <button key={i} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-sm">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['Home', '/'], ['Shop', '/shop'], ['Subscriptions', '/subscriptions'], ['Cart', '/cart']].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-blue-400 transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {['Medicines', 'Supplements', 'Medical Equipment', 'Skincare', 'Baby Care'].map(c => (
                <li key={c}>
                  <Link to="/shop" className="hover:text-blue-400 transition">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2"><span>📍</span> 123 Health Street, Medical District</li>
              <li className="flex items-center gap-2"><span>📞</span> +1 (800) MED-EXPR</li>
              <li className="flex items-center gap-2"><span>✉️</span> support@medexpress.com</li>
              <li className="flex items-center gap-2"><span>🕐</span> 24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-2">
          <p>© 2025 MedExpress. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
