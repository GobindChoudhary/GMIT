import React, { useState } from "react";

/**
 * Login/Register Modal Component
 * 
 * A popup overlay for user authentication. Toggles between Login and Register states.
 * 
 * @param {Object} props
 * @param {boolean} props.open - Whether the modal is currently visible
 * @param {Function} props.onClose - Function to call when the modal backfrop or close button is clicked
 * @returns {JSX.Element|null} The rendered modal or null if not open
 */
const LoginModal = ({ open, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-200 flex min-h-screen items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 relative animate-popup flex flex-col justify-center">
        <button
          className="absolute top-3 right-3 text-2xl text-slate-400 hover:text-brand-accent"
          onClick={onClose}
          aria-label="Close login/register modal"
        >
          <i className="ri-close-line"></i>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-brand-dark text-center">
          {isRegister ? "Register" : "Login"}
        </h2>
        <form className="flex flex-col gap-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-4 py-2 focus:outline-brand-accent"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2 focus:outline-brand-accent"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-4 py-2 focus:outline-brand-accent"
            required
          />
          <button
            type="submit"
            className="bg-brand-accent text-white font-semibold rounded-lg py-2 mt-2 hover:bg-brand-dark transition-colors"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            className="text-brand-accent hover:underline text-sm"
            onClick={() => setIsRegister((r) => !r)}
          >
            {isRegister
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
