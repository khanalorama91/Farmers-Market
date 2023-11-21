import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
	return (
		<div className="flex justify-center items-center h-screen bg-green-500">
			<LoginForm />
		</div>
	);
};

export default LoginPage;
