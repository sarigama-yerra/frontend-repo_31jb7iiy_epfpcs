import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Auth from './components/Auth'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Auth />
      <Blog />
      <Contact />
      <footer className="border-t border-white/10 bg-[#0B0F14] text-white/60">
        <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between">
          <div>© {new Date().getFullYear()} BlueStack</div>
          <div className="text-sm">All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App