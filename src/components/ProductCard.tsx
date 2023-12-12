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
		<div className="w-64 h-72 bg-white rounded-lg overflow-hidden shadow-md m-2 flex flex-col justify-between p-4">
			<img
				className="w-full h-32 object-cover rounded-t-lg" // Rounded top edges for the image
				src={imageUrl}
				alt={`Image of ${productName}`}
			/>
			<div className="px-4 py-2 flex-1">
				<div className="font-bold text-xl mb-2">{productName}</div>
				<p className="text-gray-700 text-base">Price: ${price.toFixed(2)}</p>
				<div className="flex items-center mt-1">
					<span className="text-yellow-400 text-sm">★ {rating}</span>
				</div>
			</div>
			<button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded-md">
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
