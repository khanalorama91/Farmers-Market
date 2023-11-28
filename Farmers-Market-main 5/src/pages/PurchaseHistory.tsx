import React from 'react';
import Sidebar from '../components/Sidebar';

const PurchaseHistory: React.FC = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1">
				{/* Content for the home page */}
				<h1 className="text-3xl font-bold">Purchase History</h1>
			</main>
		</div>
	);
};

export default PurchaseHistory;
