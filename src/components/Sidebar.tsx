// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/corn-62.svg';
import HomeIcon from '../assets/icons/HomeIcon.svg';
import CartIcon from '../assets/icons/cart.svg';
import FavoriteIcon from '../assets/icons/favorite.svg';
import HistoryIcon from '../assets/icons/history.svg';
const Sidebar: React.FC = () => {
	return (
		<aside className="w-64" aria-label="Sidebar">
			<div className="overflow-y-auto py-4 px-3 bg-green-500 rounded h-full">
				<div className="mb-12 flex items-center">
					<img src={logo} alt="Farmers Market" className="w-7 h-7 mr-3" />
					<h1 className="text-white text-xl font-bold truncate">
						Farmers Market
					</h1>
				</div>
				<ul className="mt-8">
					<li className="mb-6">
						<Link
							to="/home"
							className="flex items-center p-2 text-lg font-bold text-white rounded-lg hover:bg-green-600"
							style={{ fontSize: '35px' }}
						>
							<img src={HomeIcon} alt="Home" className="w-7 h-7 mr-4" />
							Home
						</Link>
					</li>
					<li className="mb-6">
						<Link
							to="/favorites"
							className="flex items-center p-2 text-lg font-bold text-white rounded-lg hover:bg-green-600"
							style={{ fontSize: '35px' }}
						>
							<img src={FavoriteIcon} alt="favorite" className="w-7 h-7 mr-4" />
							Favorites
						</Link>
					</li>
					<li className="mb-6">
						<Link
							to="/history"
							className="flex items-center p-2 text-lg font-bold text-white rounded-lg hover:bg-green-600"
							style={{ fontSize: '35px' }}
						>
							<img src={HistoryIcon} alt="history" className="w-7 h-7 mr-4" />
							History
						</Link>
					</li>
					<li className="mb-6">
						<Link
							to="/checkout"
							className="flex items-center p-2 text-lg font-bold text-white rounded-lg hover:bg-green-600"
							style={{ fontSize: '35px' }}
						>
							<img src={CartIcon} alt="cart" className="w-7 h-7 mr-4" />
							Cart
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
