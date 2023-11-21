// Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
	return (
		<aside className="w-64 " aria-label="Sidebar">
			<div className="overflow-y-auto py-4 px-3 bg-green-500 rounded h-full">
				<ul className="space-y-2">
					<li>
						<a
							href="#"
							className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-green-600"
						>
							<span className="ml-3">Home</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-green-600 "
						>
							<span className="ml-3">Favorites</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-green-600"
						>
							<span className="ml-3">Purchase History</span>
						</a>
					</li>
					{/* ... other sidebar items */}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
