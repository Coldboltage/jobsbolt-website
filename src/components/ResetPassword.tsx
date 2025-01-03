import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AiOutlineLock } from 'react-icons/ai';

const ResetPassword = ({ jwt }: { jwt: string }) => {
  const [success, setSuccess] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const fetchJwt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword: password, reset_token: jwt }),
        credentials: 'include', // Include cookies
      });

      if (response.status === 401) {
        setError('Invalid credentials. Please try again.');
        return;
      }

      if (response.status === 201) {
        setSuccess('Your password has been reset!');
      }

      router.push('/login')

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Reset Password</h1>

        {success && (
          <div className="mb-4 text-green-700 bg-green-100 p-3 rounded border border-green-300 text-sm">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-500 bg-red-100 p-3 rounded text-sm">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={fetchJwt}>
          <div>
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
            disabled={password.length === 0}

            type="submit"
            value="Reset"
            className={`w-full py-3 text-white font-semibold rounded-lg shadow-lg transition-colors ${password.length === 0
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
              }`}
          />
        </form>
      </div>
    </div>
  );
}

export default ResetPassword