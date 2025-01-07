import Link from 'next/link';
import router from 'next/router';

import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const fetchJwt = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
        credentials: 'include', // Include cookies
      });

      if (response.status === 401) {
        setError('Invalid credentials. Please try again.');
        return;
      }

      const data: { access_token: string } = await response.json();

      setEmail('');
      setPassword('');
      document.cookie = `jwt=${data.access_token}; path=/;`;
      router.push('/jobs?showToast=true');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-500 bg-red-100 p-3 rounded text-sm">
            {error}
          </div>
        )}

        <form className="space-y-6">
          {/* Email Input */}
          <div className="flex items-center bg-gray-700 rounded-lg p-3">
            <AiOutlineMail className="text-gray-400 text-lg mr-3" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
            />
          </div>


          {/* Password Input */}
          <div>
            <Link className="flex justify-end pb-3 text-sm" href={'/forgot-password'}>Forgot Your Password?</Link>
            <div className="flex items-center bg-gray-700 rounded-lg p-3">
              <AiOutlineLock className="text-gray-400 text-lg mr-3" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="Password"
                className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>


          {/* Submit Button */}
          <input
            disabled={email.length === 0 || password.length === 0}
            onClick={(e) => fetchJwt(e)}
            type="submit"
            value="Login"
            className={`w-full py-3 text-white font-semibold rounded-lg shadow-lg transition-colors ${email.length === 0 || password.length === 0
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
              }`}
          />
          <p className="text-center">Don&apos;t have an account? <Link className="underline font-bold" href="/create">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
