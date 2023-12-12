import React from 'react';

const FilterDropdown: React.FC = () => {
	return (
		<div>
			{/* Dropdown implementation */}
			<select className="border bg-green-500 text-white text-lg rounded p-2 w-48">
				<option value="bestselling">Best Selling</option>
				<option value="toprated">Top Rated</option>
			</select>
		</div>
	);
};

export default FilterDropdown;
