import React from 'react';

const tiers = [
  { name: 'Starter', price: '$9', period: '/mo', features: ['Basic auth', 'Email support', 'Blog included'], cta: 'Start free' },
  { name: 'Pro', price: '$29', period: '/mo', features: ['Everything in Starter', 'Priority support', 'Advanced analytics'], cta: 'Choose Pro', highlight: true },
  { name: 'Scale', price: '$99', period: '/mo', features: ['SLA + SSO', 'Dedicated support', 'Custom limits'], cta: 'Contact sales' }
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#0B0F14] text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Simple pricing that scales</h2>
          <p className="mt-3 text-white/70">Upgrade anytime. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border border-white/10 p-6 bg-white/5 ${t.highlight ? 'ring-1 ring-emerald-400/40' : ''}`}>
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-semibold">{t.price}</div>
                <div className="text-white/70">{t.period}</div>
              </div>
              <div className="mt-1 text-white/90">{t.name}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                {t.features.map((f) => (<li key={f}>{f}</li>))}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-white text-black py-2 font-medium hover:bg-white/90 transition">{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;