export const PRODUCTS = [
  { id: 1, name: 'Paracetamol 500mg', description: 'Fast-acting pain relief and fever reducer. Suitable for adults and children over 12.', price: 4.99, category: 'medicine', stock: 150, requiresPrescription: false, manufacturer: 'PharmaCo Ltd', rating: 4.5, reviews: 234, emoji: '💊', popular: true },
  { id: 2, name: 'Vitamin D3 1000 IU', description: 'Essential vitamin D supplement to support bone health and immune function.', price: 12.99, category: 'supplement', stock: 80, requiresPrescription: false, manufacturer: 'NutriVite', rating: 4.7, reviews: 189, emoji: '🌟', popular: true },
  { id: 3, name: 'Amoxicillin 250mg', description: 'Broad-spectrum antibiotic for bacterial infections. Prescription required.', price: 18.50, category: 'medicine', stock: 60, requiresPrescription: true, manufacturer: 'MediPharma', rating: 4.3, reviews: 87, emoji: '🔬', popular: false },
  { id: 4, name: 'Blood Pressure Monitor', description: 'Accurate digital BP monitor for home use with memory for 60 readings.', price: 45.99, category: 'equipment', stock: 25, requiresPrescription: false, manufacturer: 'HealthTech', rating: 4.6, reviews: 312, emoji: '🩺', popular: true },
  { id: 5, name: 'Omega-3 Fish Oil', description: 'High-quality omega-3 fatty acids to support heart, brain, and joint health.', price: 16.99, category: 'supplement', stock: 100, requiresPrescription: false, manufacturer: 'OceanHealth', rating: 4.4, reviews: 256, emoji: '🐟', popular: false },
  { id: 6, name: 'Ibuprofen 400mg', description: 'Anti-inflammatory pain relief for headaches, toothaches, and muscle pain.', price: 6.49, category: 'medicine', stock: 200, requiresPrescription: false, manufacturer: 'PharmaCo Ltd', rating: 4.4, reviews: 198, emoji: '💊', popular: true },
  { id: 7, name: 'Sunscreen SPF 50', description: 'Broad-spectrum UVA/UVB protection with moisturizing benefits. Water-resistant.', price: 14.99, category: 'skincare', stock: 75, requiresPrescription: false, manufacturer: 'DermaSkin', rating: 4.5, reviews: 143, emoji: '☀️', popular: false },
  { id: 8, name: 'Multivitamin Complex', description: 'Complete daily multivitamin with 23 essential vitamins and minerals.', price: 22.99, category: 'supplement', stock: 120, requiresPrescription: false, manufacturer: 'NutriVite', rating: 4.6, reviews: 321, emoji: '🌈', popular: false },
  { id: 9, name: 'Digital Thermometer', description: 'Fast and accurate digital thermometer with fever alert and memory recall.', price: 12.99, category: 'equipment', stock: 45, requiresPrescription: false, manufacturer: 'HealthTech', rating: 4.3, reviews: 167, emoji: '🌡️', popular: false },
  { id: 10, name: 'Cetirizine 10mg', description: 'Non-drowsy antihistamine for hay fever, allergies, and hives.', price: 8.99, category: 'medicine', stock: 90, requiresPrescription: false, manufacturer: 'AllerCare', rating: 4.5, reviews: 212, emoji: '🌸', popular: false },
  { id: 11, name: 'Aloe Vera Gel', description: 'Pure aloe vera gel for soothing sunburn, skin irritation and everyday moisturizing.', price: 9.99, category: 'skincare', stock: 110, requiresPrescription: false, manufacturer: 'NatureCare', rating: 4.7, reviews: 289, emoji: '🌿', popular: false },
  { id: 12, name: 'Probiotics 10B CFU', description: 'Advanced probiotic formula for digestive health and immunity support.', price: 24.99, category: 'supplement', stock: 65, requiresPrescription: false, manufacturer: 'GutHealth Co', rating: 4.5, reviews: 178, emoji: '🦠', popular: false },
];

export const PLANS = [
  {
    id: 1, name: 'Basic', price: 9.99, yearlyPrice: 99.99,
    badge: null, btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    cardClass: 'border border-gray-200',
    description: 'Perfect for individuals',
    features: ['Free standard delivery (3–5 days)', '5% off all medicines', 'Order tracking', '24/7 customer support', 'Monthly health newsletter'],
    missing: ['Priority delivery', 'Pharmacist consultation', 'Supplements discount'],
  },
  {
    id: 2, name: 'Standard', price: 19.99, yearlyPrice: 199.99,
    badge: 'Most Popular', btnClass: 'bg-teal-600 hover:bg-teal-700 text-white',
    cardClass: 'border-2 border-teal-500 shadow-xl',
    description: 'Best for families',
    features: ['Free priority delivery (1–2 days)', '15% off all medicines', 'Order tracking & history', '24/7 priority support', 'Monthly health newsletter', 'Pharmacist chat (2×/month)', '10% off supplements'],
    missing: ['Same-day delivery', 'Unlimited consultations'],
  },
  {
    id: 3, name: 'Premium', price: 34.99, yearlyPrice: 349.99,
    badge: 'Best Value', btnClass: 'bg-purple-600 hover:bg-purple-700 text-white',
    cardClass: 'border border-purple-200',
    description: 'Complete healthcare coverage',
    features: ['Free same-day delivery', '25% off all medicines', 'Advanced order tracking', '24/7 VIP support', 'Monthly health newsletter', 'Unlimited pharmacist consultations', '20% off all supplements', 'Personalized health dashboard', 'Exclusive member-only offers'],
    missing: [],
  },
];

export const TESTIMONIALS = [
  { id: 1, name: 'Sarah Johnson', role: 'Standard Plan Member', avatar: '👩', rating: 5, text: "MedExpress has made managing my family's medications so much easier. The subscription saves us money every month and delivery is always on time!" },
  { id: 2, name: 'Michael Chen', role: 'Premium Plan Member', avatar: '👨', rating: 5, text: 'The pharmacist consultation feature is incredible. I got expert advice without leaving home. Worth every penny for the Premium plan!' },
  { id: 3, name: 'Emma Williams', role: 'Basic Plan Member', avatar: '👩‍🦱', rating: 4, text: 'Great prices, genuine products, and fast delivery. Even the basic plan offers amazing value. Highly recommend to anyone!' },
];
