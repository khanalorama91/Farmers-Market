import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import PurchaseHistory from '../pages/PurchaseHistory';
// Import other pages as needed

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/home" element={<Home></Home>} />
			<Route path="/favorites" element={<Favorites></Favorites>} />
			<Route path="/history" element={<PurchaseHistory></PurchaseHistory>} />
			<Route path="/Checkout" element={<Cart></Cart>} />
			{/* Define other routes */}
		</Routes>
	);
};

export default AppRoutes;
