import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants/data';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find(p => p.id === Number(id));
  const related = PRODUCTS.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <span className="text-6xl">😕</span>
        <p className="text-gray-600 text-lg">Product not found</p>
        <button onClick={() => navigate('/shop')} className="text-blue-600 hover:underline">Back to Shop</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
  ));

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-blue-600">Shop</button>
          <span>/</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Image */}
          <div className="bg-blue-50 rounded-2xl flex items-center justify-center h-72 text-9xl">
            {product.emoji}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex gap-2 mb-2">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">{product.category}</span>
              {product.requiresPrescription && (
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Prescription Required</span>
              )}
              {product.stock < 30 && (
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Low Stock</span>
              )}
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h1>
            <p className="text-sm text-gray-400 mb-3">by {product.manufacturer}</p>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-lg">{stars}</div>
              <span className="text-sm text-gray-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

            <div className="text-3xl font-extrabold text-gray-900 mb-6">${product.price.toFixed(2)}</div>

            {product.requiresPrescription ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-4">
                ⚕️ This medicine requires a valid prescription. Please upload your prescription to proceed.
                <button className="block mt-2 text-red-600 font-semibold hover:underline">Upload Prescription →</button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-lg font-bold">−</button>
                  <span className="px-4 py-2 font-semibold text-gray-900 min-w-[3rem] text-center">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-lg font-bold">+</button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition ${
                    added ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {added ? '✓ Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            )}

            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-gray-500">
              <div className="bg-gray-50 rounded-xl p-3"><span className="text-lg block mb-1">🚚</span>Free Delivery</div>
              <div className="bg-gray-50 rounded-xl p-3"><span className="text-lg block mb-1">🔄</span>30-day Return</div>
              <div className="bg-gray-50 rounded-xl p-3"><span className="text-lg block mb-1">✅</span>100% Genuine</div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
