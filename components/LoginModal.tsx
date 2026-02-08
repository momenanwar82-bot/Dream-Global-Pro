import React, { useState, useEffect } from 'react';
import { registerUser, loginUser } from '../services/geminiService';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (email: string, name: string) => void;
  hideCloseButton?: boolean;
  initialMode?: 'signup' | 'login';
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin, hideCloseButton = false, initialMode = 'signup' }) => {
  const [mode, setMode] = useState<'signup' | 'login'>(initialMode);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (mode === 'signup' && !name.trim()) return setError('Name is required');
    if (!email || !email.includes('@')) return setError('Invalid email address');
    if (password.length < 6) return setError('Password must be at least 6 characters');

    setLoading(true);
    
    let result;
    if (mode === 'signup') {
      result = await registerUser(email, password, name);
    } else {
      result = await loginUser(email, password, rememberMe);
    }
    
    if (result.status === 'success') {
      setSuccess(true);
      setLoading(false);
      const displayName = mode === 'signup' ? name : (result.user?.displayName || 'User');
      setTimeout(() => {
        onLogin(email, displayName);
      }, 1500);
    } else {
      setLoading(false);
      setError(result.message || 'Authentication failed.');
    }
  };

  const toggleMode = () => {
    setMode(prev => prev === 'signup' ? 'login' : 'signup');
    setError('');
    setSuccess(false);
  };

  return (
    <div className={`${hideCloseButton ? 'w-full flex items-center justify-center' : 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-3xl overflow-y-auto'}`} dir="ltr">
      <div className={`bg-slate-900 w-full max-w-md rounded-[48px] shadow-2xl border border-white/5 overflow-hidden animate-in fade-in zoom-in duration-700 ${hideCloseButton ? '' : 'my-auto'}`}>
        <div className="h-52 bg-gradient-to-br from-indigo-600 to-indigo-900 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          {!hideCloseButton && (
            <div className="absolute top-6 right-6 z-20">
              <button onClick={onClose} className="p-2.5 bg-black/20 hover:bg-black/40 rounded-full text-white transition-all backdrop-blur-md border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          
          <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] mb-4 transition-transform hover:scale-110 duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-white font-black text-lg uppercase tracking-[0.2em] relative z-10">Dream Global Pro</h2>
          <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mt-1 relative z-10">Global Elite Market</span>
        </div>

        <div className="p-10 pt-12 space-y-8 text-left">
          <div className="text-center">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
              {mode === 'signup' ? 'Join Marketplace' : 'Welcome Back'}
            </h3>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.1em] opacity-60">
              {mode === 'signup' ? 'Create your professional profile to start selling globally' : 'Enter details to access your merchant dashboard'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-600 group-focus-within:text-indigo-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
                  </span>
                  <input 
                    required
                    disabled={loading || success}
                    type="text" 
                    className="w-full pl-14 pr-6 py-5 rounded-3xl bg-slate-800/50 border border-white/5 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all font-bold text-white text-base placeholder-slate-700"
                    placeholder="e.g., John Doe"
                    value={name}
                    onChange={e => { setName(e.target.value); setError(''); }}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-600 group-focus-within:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
                </span>
                <input 
                  required
                  disabled={loading || success}
                  type="email" 
                  className="w-full pl-14 pr-6 py-5 rounded-3xl bg-slate-800/50 border border-white/5 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all font-bold text-white text-base placeholder-slate-700"
                  placeholder="name@email.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Password</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-600 group-focus-within:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
                </span>
                <input 
                  required
                  disabled={loading || success}
                  type="password" 
                  className="w-full pl-14 pr-6 py-5 rounded-3xl bg-slate-800/50 border border-white/5 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all font-bold text-white text-base placeholder-slate-700"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                />
              </div>
            </div>

            {mode === 'login' && (
              <div className="flex items-center gap-3 ml-1">
                <input 
                  type="checkbox" 
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="rememberMe" className="text-[11px] font-black text-slate-500 uppercase tracking-widest cursor-pointer">Stay logged in</label>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl animate-in shake duration-300">
                <p className="text-red-400 text-[11px] text-center font-black uppercase tracking-widest">{error}</p>
              </div>
            )}

            {success && (
              <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl animate-in zoom-in duration-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <p className="text-emerald-400 text-[11px] text-center font-black uppercase tracking-[0.2em]">
                  {mode === 'signup' ? 'Account Created! Loading...' : 'Login Successful! Syncing...'}
                </p>
              </div>
            )}

            <div className="pt-4">
              <button 
                type="submit"
                disabled={loading || success}
                className="w-full py-6 bg-indigo-600 text-white rounded-[28px] font-black text-sm uppercase tracking-[0.25em] hover:bg-indigo-700 shadow-[0_20px_40px_rgba(79,70,229,0.3)] transition-all active:scale-[0.97] border border-white/10 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  mode === 'signup' ? 'Start Trading Now' : 'Enter Dream Global Pro'
                )}
              </button>
            </div>
          </form>

          <div className="text-center space-y-4">
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
              {mode === 'signup' ? 'Already have an account?' : "New to the market?"}
              <button 
                type="button"
                onClick={toggleMode}
                className="text-indigo-400 ml-2 hover:underline font-black"
              >
                {mode === 'signup' ? 'Login' : 'Create Account'}
              </button>
            </p>
            <div className="pt-4 flex flex-col items-center gap-2 opacity-40">
               <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.4em]">Full Data Encryption Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;