import React from 'react';

interface ProductCardProps {
	productName: string;
	price: number;
	imageUrl: string;
	rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
	productName,
	price,
	imageUrl,
	rating,
}) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
			<img className="w-full" src={imageUrl} alt={`Image of ${productName}`} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{productName}</div>
				<p className="text-gray-700 text-base">Price: ${price.toFixed(2)}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					★ {rating}
				</span>
				{/* Button or icon to add product to cart */}
				<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-full">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
