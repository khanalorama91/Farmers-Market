import React from 'react';
import FilterDropdown from '../components/FilterDropdown';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import products from '../data/productsData';

const Home: React.FC = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1">
				<div className="flex justify-between items-center p-4 border-b">
					<FilterDropdown />
					<SearchBar />
				</div>
				<div className="p-4 mt-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
				</div>
			</main>
		</div>
	);
};

export default Home;
