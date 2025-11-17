import React, { useState } from 'react';

const Contact = () => {
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to send');
      setStatus('Message sent. We\'ll be in touch!');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus(e.message);
    }
  };

  return (
    <section id="contact" className="bg-[#0B0F14] text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Contact our team</h2>
            <p className="mt-3 text-white/70">We typically respond within one business day.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-md bg-[#0B0F14] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/50" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-md bg-[#0B0F14] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/50" />
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea rows="4" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-md bg-[#0B0F14] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/50" />
            </div>
            <button className="w-full rounded-md bg-white text-black py-2 font-medium hover:bg-white/90 transition">Send</button>
            {status && <div className="text-sm text-emerald-400 text-center">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;