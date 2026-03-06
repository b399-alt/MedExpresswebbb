import { useNavigate } from 'react-router-dom';
import { PRODUCTS, PLANS, TESTIMONIALS } from '../constants/data';
import ProductCard from '../components/ProductCard';
import SubscriptionCard from '../components/SubscriptionCard';

const FEATURES = [
  { icon: '🚚', title: 'Free Delivery', desc: 'Free delivery on all subscription orders. Same-day available on Premium.' },
  { icon: '👨‍⚕️', title: 'Licensed Pharmacists', desc: 'Get expert advice from certified pharmacists anytime you need.' },
  { icon: '💰', title: 'Subscription Savings', desc: 'Save up to 25% on every order with our affordable subscription plans.' },
  { icon: '🔒', title: '100% Genuine', desc: 'All products are sourced directly from licensed manufacturers.' },
];

const STATS = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '500+', label: 'Products Available' },
  { value: '24/7', label: 'Customer Support' },
  { value: '99%', label: 'On-time Delivery' },
];

const STEPS = [
  { step: '01', icon: '📋', title: 'Choose Your Plan', desc: 'Select a subscription plan that fits your needs and budget.' },
  { step: '02', icon: '🛒', title: 'Order Your Medicines', desc: 'Browse our catalogue and add items to your cart.' },
  { step: '03', icon: '🚀', title: 'Get It Delivered', desc: 'Receive your medicines at your doorstep on time, every time.' },
];

export default function Home() {
  const navigate = useNavigate();
  const popularProducts = PRODUCTS.filter(p => p.popular).slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full mb-4">
              🚀 Fast, Reliable & Affordable
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Medicine Delivered<br />
              <span className="text-teal-200">to Your Doorstep</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Subscribe to MedExpress for regular medicine delivery, expert pharmacy advice, and exclusive member discounts. Never run out of essential medicines again.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => navigate('/shop')} className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition shadow">
                Shop Now →
              </button>
              <button onClick={() => navigate('/subscriptions')} className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition">
                View Plans
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-100">
              <span>✓ 100% Genuine Medicines</span>
              <span>✓ Licensed Pharmacists</span>
              <span>✓ 30-day Returns</span>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <span className="text-9xl">🏥</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white text-blue-700 rounded-xl px-3 py-2 shadow-lg text-sm font-semibold">
                ⚡ Same-day delivery
              </div>
              <div className="absolute -bottom-4 -left-4 bg-teal-400 text-white rounded-xl px-3 py-2 shadow-lg text-sm font-semibold">
                💊 500+ Products
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-blue-600">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose MedExpress?</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">We make healthcare accessible, affordable, and convenient for everyone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-500 mt-2">Get your medicines in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-md">
                  {s.icon}
                </div>
                <span className="text-xs text-blue-400 font-bold mb-1">STEP {s.step}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
                {i < 2 && <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-blue-300 text-2xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
            <p className="text-gray-500 mt-1">Top-rated medicines and health products</p>
          </div>
          <button onClick={() => navigate('/shop')} className="text-blue-600 font-semibold hover:underline text-sm">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Choose Your Plan</h2>
            <p className="text-gray-400 mt-2">Flexible plans for every need. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PLANS.map(plan => <SubscriptionCard key={plan.id} plan={plan} />)}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">No setup fees · No hidden costs · Cancel anytime</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Members Say</h2>
          <p className="text-gray-500 mt-2">Join thousands of happy subscribers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-3 text-lg">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">{t.avatar}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Start Your Free Trial Today</h2>
          <p className="text-blue-100 mb-8 text-lg">Join 50,000+ subscribers saving money on medicines every month.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => navigate('/signup')} className="bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition shadow-lg">
              Get Started Free
            </button>
            <button onClick={() => navigate('/subscriptions')} className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition">
              Compare Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
