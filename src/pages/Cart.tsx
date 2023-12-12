import React from 'react';
import CheeseImage from '../assets/AmericanCheese.png';
import BaconImage from '../assets/Bacon.png';
import EggsImage from '../assets/Eggs.png';
import Sidebar from '../components/Sidebar';

const Cart: React.FC = () => {
	const cartItems = [
		{
			id: 1,
			name: 'American Cheese',
			quantity: 1,
			price: 10.0,
			imageUrl: CheeseImage,
		},
		{
			id: 2,
			name: 'Eggs',
			quantity: 2,
			price: 7.0,
			imageUrl: EggsImage,
		},
		{
			id: 3,
			name: 'Bacon',
			quantity: 2,
			price: 12.0,
			imageUrl: BaconImage,
		},
	];

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1 flex flex-col">
				<div className="p-8 flex-1">
					<h1 className="text-2xl font-bold mb-8">Cart</h1>
					<ul>
						{cartItems.map((item) => (
							<li
								key={item.id}
								className="flex justify-between items-center mb-6 bg-white p-4 shadow rounded"
							>
								<img
									src={item.imageUrl}
									alt={item.name}
									className="w-20 h-20 object-cover mr-4"
								/>
								<span className="flex-1">{item.name}</span>
								<span>Quantity: {item.quantity}</span>
								<span className="font-bold">${item.price}</span>
								<button className="ml-4 text-red-500 hover:text-red-700">
									Delete Order
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="w-full bg-white p-8 shadow-lg">
					<div className="flex justify-between items-center mb-6">
						<span>Total</span>
						<span className="font-bold">${totalPrice.toFixed(2)}</span>
					</div>
					<button className="w-full bg-green-500 text-white p-4 rounded hover:bg-green-600 mb-4">
						Pay
					</button>
					<button className="w-full bg-transparent p-4 rounded border border-gray-300 hover:bg-gray-100">
						Pay with Gift card
					</button>
				</div>
			</main>
		</div>
	);
};

export default Cart;
