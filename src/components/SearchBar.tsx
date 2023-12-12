// SearchBar.tsx
import React from 'react';

const SearchBar: React.FC = () => {
	return (
		<input
			className="border rounded p-2"
			type="search"
			placeholder="Search Product"
		/>
	);
};

export default SearchBar;
