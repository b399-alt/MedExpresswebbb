import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQty, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const delivery = totalPrice > 30 ? 0 : 4.99;
  const discount = localStorage.getItem('token') ? totalPrice * 0.05 : 0;
  const total = totalPrice + delivery - discount;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 px-4">
        <span className="text-8xl">🛒</span>
        <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="text-gray-500">Looks like you haven't added any medicines yet.</p>
        <button onClick={() => navigate('/shop')} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mt-2">
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart <span className="text-gray-400 font-normal text-lg">({totalItems} items)</span></h1>
          <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700">Clear Cart</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 items-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h3>
                  <p className="text-xs text-gray-400 capitalize">{item.category}</p>
                  <p className="text-blue-600 font-bold mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2.5 py-1.5 text-gray-500 hover:bg-gray-100 text-sm font-bold">−</button>
                    <span className="px-3 py-1.5 text-sm font-semibold min-w-[2rem] text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2.5 py-1.5 text-gray-500 hover:bg-gray-100 text-sm font-bold">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="text-right min-w-[4rem]">
                  <p className="font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                </div>
              </div>
            ))}

            <button onClick={() => navigate('/shop')} className="text-blue-600 hover:underline text-sm flex items-center gap-1">
              ← Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className={delivery === 0 ? 'text-green-600 font-medium' : ''}>{delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Subscription Discount (5%)</span>
                    <span>−${discount.toFixed(2)}</span>
                  </div>
                )}
                {totalPrice <= 30 && (
                  <p className="text-xs text-blue-600 bg-blue-50 rounded-lg p-2">
                    Add ${(30 - totalPrice).toFixed(2)} more for free delivery!
                  </p>
                )}
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  if (!localStorage.getItem('token')) navigate('/login');
                  else alert('Proceeding to checkout...');
                }}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition mt-6"
              >
                Proceed to Checkout
              </button>

              {!localStorage.getItem('token') && (
                <p className="text-xs text-gray-400 text-center mt-3">
                  <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline">Login</button> to apply subscription discounts
                </p>
              )}

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                <span>🔒</span> Secure & Encrypted Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
