import React from 'react';
import { Lock } from 'lucide-react';

export const Portal: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-offwhite flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-md w-full space-y-8 bg-white p-10 shadow-lg border-t-4 border-primary relative overflow-hidden rounded-xl">
        
        {/* Badge */}
        <div className="absolute top-6 right-[-35px] transform rotate-45 bg-primary text-white text-xs font-bold py-1 px-10 shadow-md">
          COMING SOON
        </div>

        <div className="text-center">
          <Lock className="mx-auto h-12 w-12 text-primary opacity-80" />
          <h2 className="mt-6 text-3xl font-serif font-bold text-gray-900">
            Client Hub Login
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Secure Access Portal
          </p>
        </div>

        <div className="mt-8 space-y-6 opacity-50 select-none pointer-events-none filter blur-[0.5px]">
          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email address"
                disabled
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
                disabled
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none"
            >
              Sign in
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            Our proprietary <span className="font-semibold text-primary">Client Hub</span> is currently in development.
          </p>
          <p className="mt-3 text-xs text-gray-500 max-w-xs mx-auto">
            Soon, clients will access 24/7 live project tracking, real-time logistics updates, and transparent document repositories directly through this secure portal.
          </p>
        </div>

      </div>
    </div>
  );
};