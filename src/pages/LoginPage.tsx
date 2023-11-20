import React from 'react';

const LoginPage: React.FC = () => {
	// Function to handle the form submission
	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Perform login logic here
	};

	return (
		<div className="flex flex-col h-screen bg-green-500">
			<div className="m-auto bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
				<form onSubmit={handleLogin}>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
					<div className="mt-4">
						<button
							type="button"
							className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
						>
							Register New Account
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
