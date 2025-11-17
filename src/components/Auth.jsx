import React, { useState } from 'react';

const Auth = () => {
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Loading...');
    try {
      const url = mode === 'login' ? `${base}/api/auth/login` : `${base}/api/auth/signup`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Request failed');
      setStatus(`Welcome, ${data.name}! Token: ${data.token.substring(0,8)}...`);
    } catch (e) {
      setStatus(e.message);
    }
  };

  return (
    <section id="auth" className="bg-[#0B0F14] text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Authentication built-in</h2>
            <p className="mt-3 text-white/70">Sign up or sign in to experience the flow. Passwords are securely hashed before storage.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-md bg-[#0B0F14] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/50" />
              </div>
            )}
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-md bg-[#0B0F14] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/50" />
            </div>
            <div>
              <label className="text-sm text-white/70">Password</label>
              <input type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} className="mt-1 w-full rounded-md bg-[#0B0F14] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/50" />
            </div>
            <button className="w-full rounded-md bg-white text-black py-2 font-medium hover:bg-white/90 transition">{mode === 'login' ? 'Sign in' : 'Create account'}</button>
            <div className="text-sm text-white/70 text-center">
              {mode === 'login' ? (
                <>New here? <button type="button" onClick={()=>setMode('signup')} className="text-white hover:underline">Create an account</button></>
              ) : (
                <>Have an account? <button type="button" onClick={()=>setMode('login')} className="text-white hover:underline">Sign in</button></>
              )}
            </div>
            {status && <div className="text-sm text-emerald-400 text-center">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;