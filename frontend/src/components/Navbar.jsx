import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'Subscriptions', to: '/subscriptions' },
  ];

  const active = (to) =>
    location.pathname === to ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">💊</span>
            <span className="text-xl font-bold text-blue-600">MedExpress</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`text-sm transition-colors ${active(l.to)}`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/cart')} className="relative p-2 text-gray-600 hover:text-blue-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {token ? (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/dashboard" className="text-sm text-gray-700 hover:text-blue-600 font-medium px-3 py-2">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-700 font-medium px-3 py-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/login" className="text-sm font-medium text-blue-600 border border-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50 transition">
                  Login
                </Link>
                <Link to="/signup" className="text-sm font-medium text-white bg-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile hamburger */}
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`text-sm py-1 ${active(l.to)}`}>
              {l.label}
            </Link>
          ))}
          {token ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="text-sm text-gray-700 py-1">Dashboard</Link>
              <button onClick={() => { setOpen(false); handleLogout(); }} className="text-sm text-red-500 text-left py-1">Logout</button>
            </>
          ) : (
            <div className="flex gap-2 pt-1">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center text-sm text-blue-600 border border-blue-600 py-2 rounded-lg">Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="flex-1 text-center text-sm text-white bg-blue-600 py-2 rounded-lg">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
