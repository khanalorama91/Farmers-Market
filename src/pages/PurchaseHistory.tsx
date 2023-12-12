import React from 'react';
import CheeseImage from '../assets/AmericanCheese.png';
import PicklesImage from '../assets/Pickles.png';
import SalsaImage from '../assets/Salsa.png';
import StrawberryJellyImage from '../assets/StrawberryJelly.png';
import WhiteBreadImage from '../assets/WhiteBread.png';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';

// Mock data for purchase history
const purchaseHistory = [
	{
		id: 1,
		name: 'American Cheese',
		quantity: 1,
		total: 10.0,
		imageUrl: CheeseImage, // Replace with actual image path
	},
	{
		id: 2,
		name: 'Salsa',
		quantity: 1,
		total: 11.0,
		imageUrl: SalsaImage,
	},
	{
		id: 3,
		name: 'White Bread',
		quantity: 1,
		total: 5.0,
		imageUrl: WhiteBreadImage,
	},
	{
		id: 4,
		name: 'Pickles',
		quantity: 1,
		total: 5.0,
		imageUrl: PicklesImage,
	},
	{
		id: 5,
		name: 'Strawberry Jelly',
		quantity: 1,
		total: 10.0,
		imageUrl: StrawberryJellyImage,
	},
];

const PurchaseHistory: React.FC = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1 overflow-y-auto">
				<div className="max-w-4xl mx-auto pt-8">
					{' '}
					{/* Adjusted padding-top for more space */}
					{/* Placeholder for SearchBar component */}
					<div className="mb-4 w-full flex justify-end">
						<SearchBar />
					</div>
					<h1 className="text-3xl font-bold text-green-500 text-center mb-8 mt-4">
						Purchase History
					</h1>{' '}
					{/* Adjusted margin-top for header */}
					{purchaseHistory.map((item) => (
						<div
							key={item.id}
							className="flex items-center justify-between bg-white p-4 my-2 rounded-lg shadow-md"
						>
							<img
								src={item.imageUrl}
								alt={item.name}
								className="w-20 h-20 object-cover mr-4"
							/>
							<div className="flex-grow">
								<h2 className="text-xl font-semibold">{item.name}</h2>
								<p className="text-md">
									Quantity: {item.quantity} | Total: ${item.total.toFixed(2)}
								</p>
							</div>
							<button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md text-sm">
								Buy Again
							</button>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};

export default PurchaseHistory;
