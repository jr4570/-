import React, { useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
  onBack: () => void;
  t: {
    adminLogin: string;
    password: string;
    login: string;
    back: string;
    invalidPassword: string;
  };
}

export function AdminLogin({ onLogin, onBack, t }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a secure hash comparison
    if (password === 'admin123') {
      setError(false);
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto pt-12">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.back}</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{t.adminLogin}</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.password}
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`
                    w-full px-4 py-2 rounded-lg border
                    focus:ring-2 focus:ring-purple-500 focus:border-transparent
                    ${error ? 'border-red-300' : 'border-gray-300'}
                  `}
                  placeholder="********"
                />
                <Lock className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              {error && (
                <p className="mt-1 text-sm text-red-600">
                  {t.invalidPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
            >
              {t.login}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}