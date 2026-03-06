import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const stars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
      {/* Image area */}
      <div
        onClick={() => navigate(`/shop/${product.id}`)}
        className="bg-blue-50 rounded-t-xl h-36 flex items-center justify-center text-6xl cursor-pointer hover:bg-blue-100 transition"
      >
        {product.emoji}
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Category + prescription badge */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full capitalize">{product.category}</span>
          {product.requiresPrescription && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Rx</span>
          )}
        </div>

        {/* Name */}
        <h3
          onClick={() => navigate(`/shop/${product.id}`)}
          className="font-semibold text-gray-900 text-sm mb-1 cursor-pointer hover:text-blue-600 transition leading-tight"
        >
          {product.name}
        </h3>

        {/* Manufacturer */}
        <p className="text-xs text-gray-400 mb-2">{product.manufacturer}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-sm">{stars(product.rating)}</div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price + Add to Cart */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            disabled={product.requiresPrescription}
            className={`text-sm px-3 py-1.5 rounded-lg font-medium transition ${
              product.requiresPrescription
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {product.requiresPrescription ? 'Need Rx' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
