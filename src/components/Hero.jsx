import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0B0F14] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F14]/30 to-[#0B0F14] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live beta is open now
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
            Build your SaaS with speed, performance and style
          </h1>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            A modern platform with authentication, billing-ready pricing, a clean blog, and a contact form you can actually use.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">View Pricing</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;