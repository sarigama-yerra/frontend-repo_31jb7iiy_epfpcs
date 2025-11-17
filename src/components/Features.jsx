import React from 'react';
import { Shield, Rocket, Gauge, Layers } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-5 w-5 text-emerald-400" />,
    title: 'Launch faster',
    desc: 'Production-ready auth, blog, and contact out of the box.'
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Secure by default',
    desc: 'Best practices baked in from day one.'
  },
  {
    icon: <Gauge className="h-5 w-5 text-emerald-400" />,
    title: 'Blazing performance',
    desc: 'Optimized frontend with a fast Python backend.'
  },
  {
    icon: <Layers className="h-5 w-5 text-emerald-400" />,
    title: 'Modular design',
    desc: 'Composable sections that adapt to your brand.'
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-[#0B0F14] text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                {f.icon}
                <h3 className="font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;