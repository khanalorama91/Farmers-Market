import React from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import products from '../data/productsData';

const Home: React.FC = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1 p-4">
				{/* You can add padding or additional styles as needed */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{/* Map over the products array and render ProductCard components */}
					{products.map((product) => (
						<ProductCard
							key={product.id}
							productName={product.name}
							price={product.price}
							imageUrl={product.imageUrl}
							rating={product.rating}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

export default Home;
