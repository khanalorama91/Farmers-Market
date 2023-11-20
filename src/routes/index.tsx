import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
// Import other pages as needed

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />

			{/* Define other routes */}
		</Routes>
	);
};

export default AppRoutes;
