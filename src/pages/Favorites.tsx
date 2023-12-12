import React from 'react';
import CheeseImage from '../assets/AmericanCheese.png';
import BaconImage from '../assets/Bacon.png';
import EggsImage from '../assets/Eggs.png';
import WhiteBreadImage from '../assets/WhiteBread.png';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';

const favoriteProducts = [
	{
		id: 1,
		name: 'American Cheese',
		price: 10.0,
		imageUrl: CheeseImage,
		rating: 4.3,
	},
	{
		id: 2,
		name: 'Eggs',
		price: 7.0,
		imageUrl: EggsImage,
		rating: 4.5,
	},
	{
		id: 3,
		name: 'Bacon',
		price: 12.0,
		imageUrl: BaconImage,
		rating: 4.9,
	},
	{
		id: 7,
		name: 'White Bread',
		price: 5.0,
		imageUrl: WhiteBreadImage,
		rating: 3.8,
	},
];

const Favorites: React.FC = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1 flex flex-col">
				{/* Search bar at the top */}
				<div className="w-full p-4 flex justify-end">
					<SearchBar />
				</div>
				{/* Vertically and horizontally centered Favorites header and cards */}
				<div className="flex-grow flex flex-col items-center justify-center">
					<h1 className="text-3xl font-bold text-green-500 mb-8">Favorites</h1>
					<div className="w-full max-w-7xl">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-start">
							{favoriteProducts.map((product) => (
								<ProductCard
									key={product.id}
									productName={product.name}
									price={product.price}
									imageUrl={product.imageUrl}
									rating={product.rating}
								/>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Favorites;
