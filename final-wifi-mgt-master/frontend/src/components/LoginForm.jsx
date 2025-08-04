import React, { useState } from 'react';
import { LogIn, Eye, EyeOff, UserPlus, Shield, Sparkles, AlertCircle } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';
import ucuLogo from '../assets/ucu-logo.png';

const LoginForm = ({ onLogin, onShowRegistration }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await onLogin(email, password);
    if (!result.success) {
      setError(result.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: `url('../assets/ucu-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Centered login card */}
      <div className="relative z-10 w-full max-w-lg mx-auto">
        <div className="bg-white/95 dark:bg-slate-900/90 rounded-2xl shadow-2xl border border-pink-700/30 p-10 flex flex-col items-center">
          {/* UCU Logo and Title */}
          <img src={ucuLogo} alt="UCU Logo" className="h-20 mb-4" />
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white text-center">UGANDA CHRISTIAN UNIVERSITY</h1>
          <p className="text-pink-700 dark:text-pink-300 text-lg font-medium text-center mb-8">A Centre of Excellence in the Heart of Africa</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group/field">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors group-focus-within/field:text-purple-600 dark:group-focus-within/field:text-blue-400">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white/30 dark:bg-black/30 border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 focus:ring-purple-400/30 dark:focus:ring-blue-400/30 focus:border-purple-400 dark:focus:border-blue-400 transition-all duration-500 backdrop-blur-sm"
                  placeholder="admin@company.com"
                  required
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-blue-400/20 dark:to-purple-400/20 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            <div className="group/field">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors group-focus-within/field:text-purple-600 dark:group-focus-within/field:text-blue-400">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-4 pr-14 bg-white/30 dark:bg-black/30 border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 focus:ring-purple-400/30 dark:focus:ring-blue-400/30 focus:border-purple-400 dark:focus:border-blue-400 transition-all duration-500 backdrop-blur-sm"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-blue-400/20 dark:to-purple-400/20 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {error && (
              <div className="relative overflow-hidden bg-red-500/20 dark:bg-red-500/30 border-2 border-red-400/50 dark:border-red-400/30 rounded-2xl p-4 animate-shake">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-rose-400/10 animate-pulse"></div>
                <div className="relative flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                  <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="group relative overflow-hidden w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-6 h-6 mr-3 transition-transform group-hover:rotate-12" />
                    Sign In
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-purple-500 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Don't have an admin account?</p>
            <button
              onClick={onShowRegistration}
              className="group relative overflow-hidden bg-white/20 dark:bg-black/20 backdrop-blur-sm text-gray-900 dark:text-white py-3 px-8 rounded-2xl border-2 border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:bg-white/30 dark:hover:bg-black/30 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center justify-center font-semibold">
                <UserPlus className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                Register as Admin
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-blue-400/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          <div className="mt-8 p-6 bg-black/10 dark:bg-white/5 rounded-2xl border border-gray-200/30 dark:border-gray-700/30 backdrop-blur-sm">
            <div className="flex items-center mb-3">
              </div>
              {/*<Sparkles className="w-5 h-5 text-yellow-500 mr-3 animate-pulse" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Demo Credentials</span>
            </div>
            <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400 font-mono">
              <p><span className="text-purple-600 dark:text-blue-400 font-semibold">Email:</span> admin@company.com</p>
              <p><span className="text-purple-600 dark:text-blue-400 font-semibold">Password:</span> admin@123</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;