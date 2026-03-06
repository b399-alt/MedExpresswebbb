import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <span className="text-8xl mb-4">😕</span>
      <h1 className="text-6xl font-extrabold text-gray-900 mb-2">404</h1>
      <p className="text-xl text-gray-600 mb-2">Page not found</p>
      <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <div className="flex gap-4">
        <button onClick={() => navigate(-1)} className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-xl hover:bg-gray-100 transition text-sm font-medium">
          Go Back
        </button>
        <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition text-sm font-medium">
          Go Home
        </button>
      </div>
    </div>
  );
}
