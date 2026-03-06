import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Dashboard from '../pages/Dashboard';
import Shop from '../pages/Shop';
import ProductDetail from '../pages/ProductDetail';
import Subscriptions from '../pages/Subscriptions';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
