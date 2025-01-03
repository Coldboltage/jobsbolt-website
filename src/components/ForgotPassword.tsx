import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);


  const fetchJwt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/auth/send-reset-token/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email }),
        credentials: 'include', // Include cookies
      });

      if (response.status === 401) {
        setError('Invalid credentials. Please try again.');
        return;
      }

      if (response.status === 201) {
        setSuccess('An email has been sent to the address');
        return;
      }



      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Forgot Password</h1>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-500 bg-red-100 p-3 rounded text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 text-green-700 bg-green-100 p-3 rounded border border-green-300 text-sm">
            {success}
          </div>
        )}

        <form className="space-y-6" onSubmit={(e) => fetchJwt(e)}>
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


          {/* Submit Button */}
          <input
            disabled={email.length === 0}
            type="submit"
            value="Send Email"
            className={`w-full py-3 text-white font-semibold rounded-lg shadow-lg transition-colors ${email.length === 0
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
              }`}
          />
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword