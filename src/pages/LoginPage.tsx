import React from 'react';
import logo from '../assets/corn-62.svg';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
	return (
		<div className="flex flex-col h-screen bg-green-500">
			{/* Logo and Title */}
			<div className="p-4 flex items-center">
				<img src={logo} alt="App Logo" className="h-12 w-12 mr-2" />
				<span className="text-2xl text-white font-bold">Farmers Market</span>
			</div>

			{/* Centered LoginForm */}
			<div className="flex-grow flex justify-center items-center">
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
