// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
	return (
		<aside className="w-64 " aria-label="Sidebar">
			<div className="overflow-y-auto py-4 px-3 bg-green-500 rounded h-full">
				<ul className="space-y-2">
					<li>
						<Link
							to="/home"
							className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-green-600"
						>
							<span className="ml-3">Home</span>
						</Link>
					</li>
					<li>
						<Link
							to="/favorites"
							className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-green-600 "
						>
							<span className="ml-3">Favorites</span>
						</Link>
					</li>
					<li>
						<Link
							to="/history"
							className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-green-600"
						>
							<span className="ml-3">Purchase History</span>
						</Link>
					</li>
					<li>
						<Link
							to="/checkout" // Update this href to your cart page's path
							className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-gray-700"
						>
							{/* You can include an icon here if you have one */}
							<span className="ml-3">Cart</span>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
