import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Waitlist from './components/Waitlist';

function LandingPage() {
  const [isDemoHovered, setIsDemoHovered] = useState(false);
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdZRXI26yjuPVqJ7vVxLCZGqB78bsfAe-DkvIsVfwdo1oiMTg/viewform";

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="w-full flex flex-wrap items-center justify-between px-2 sm:px-6 py-3 sm:py-4 border-b border-zinc-800 bg-black/80 sticky top-0 z-20">
        <div className="flex flex-wrap items-center w-full sm:w-auto min-w-0 gap-4 sm:gap-8">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity min-w-0 flex-shrink-0 -ml-2 sm:ml-0">
            <img
              src="/logo.png"
              alt="NodeScale Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0"
            />
            <div className="font-extrabold text-lg sm:text-2xl text-[#6133e6] tracking-tight -ml-2 sm:-ml-4 whitespace-nowrap">NodeScale</div>
          </a>
          <nav className="hidden md:flex gap-4 sm:gap-8 text-sm font-medium flex-shrink-0">
            <a href="#about" className="hover:text-[#6133e6] transition">About</a>
            <a href="#how" className="hover:text-[#6133e6] transition">How It Works</a>
            <a href="#why" className="hover:text-[#6133e6] transition">Our Why</a>
            <a href="#faq" className="hover:text-[#6133e6] transition">FAQ</a>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center w-full sm:w-auto mt-3 sm:mt-0 basis-auto min-w-0">
          <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base w-full sm:w-auto text-center whitespace-nowrap">Get Started</a>
          <div className="relative w-full sm:w-auto">
            <button
              onMouseEnter={() => setIsDemoHovered(true)}
              onMouseLeave={() => setIsDemoHovered(false)}
              className="border border-purple-600 text-purple-600 font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-700 hover:text-white hover:border-purple-700 text-sm sm:text-base w-full sm:w-auto text-center whitespace-nowrap"
              type="button"
            >
              Book a Demo
            </button>
            {isDemoHovered && (
              <div
                className="absolute top-full mt-2 right-0 w-max max-w-xs bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg p-3 shadow-lg z-30"
              >
                We're still under development, and a product will be ready soon. We appreciate your patience!
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center min-h-[80vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/bg.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Raw Data In. AI Out. <span className="text-[#6133e6] font-semibold">Built on behavior</span></h1>
          <p className="text-lg md:text-2xl mb-8 text-zinc-300 max-w-xl">Power Kenya's tomorrow AI with real, usable data.</p>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl">Ready to turn your data into usable insights? Be the first to join NodeScale.</p>
          <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">Get Started</a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 md:px-0 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#6133e6]">About Us</h2>
        <p className="text-zinc-300 text-lg">NodeScale transforms everyday activity across Kenya into structured, usable data for AI.</p>
        <p className="text-zinc-300 text-lg">From businesses to public systems, we collect and refine real-world data to power smarter tools, decisions, and innovation.</p>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 px-4 bg-zinc-950">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#6133e6]">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="flex-1 bg-zinc-900 rounded-xl p-8 flex flex-col items-center shadow-lg border border-zinc-800">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#7a3cff]/10">
              <span className="text-3xl text-[#7a3cff]">📥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
            <p className="text-zinc-400">We gather diverse, real-world data from Kenya's businesses, users, and systems to fuel innovation.</p>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-zinc-900 rounded-xl p-8 flex flex-col items-center shadow-lg border border-zinc-800">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#7a3cff]/10">
              <span className="text-3xl text-[#7a3cff]">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
            <p className="text-zinc-400">Our platform cleans, refines, and structures data to ensure quality and usability for AI applications.</p>
          </div>
          {/* Card 3 */}
          <div className="flex-1 bg-zinc-900 rounded-xl p-8 flex flex-col items-center shadow-lg border border-zinc-800">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#7a3cff]/10">
              <span className="text-3xl text-[#7a3cff]">🔗</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">API Integration</h3>
            <p className="text-zinc-400">Seamlessly access and integrate Kenyan data into your products via robust APIs.</p>
          </div>
        </div>
      </section>

      {/* Our Why Section */}
      <section id="why" className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#6133e6]">Our Why</h2>
        <p className="text-zinc-300 text-lg">Kenya's future depends on data that reflects its people, businesses, and realities. NodeScale exists to empower the next generation of Kenyan AI and technology.</p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-zinc-950 max-w-3xl mx-auto rounded-xl my-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#6133e6]">FAQ</h2>
        <div className="space-y-6 text-left">
          <div>
            <h3 className="font-semibold text-lg text-white">What is NodeScale?</h3>
            <p className="text-zinc-400">NodeScale is a platform focused on collecting, refining, and delivering Kenyan data for AI and technology solutions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">Who can use NodeScale?</h3>
            <div className="text-zinc-400 space-y-2 mt-2">
                <p><strong>Businesses & Traders:</strong> Turn daily sales and ops into insights that guide smarter decisions.</p>
                <p><strong>Organizations:</strong> Track behavioral patterns, build data-backed programs.</p>
                <p><strong>App & Web Developers:</strong> Plug into structured Kenyan data to build powerful, local tools.</p>
                <p><strong>Researchers:</strong> Access real-world, labeled data for studies and machine learning.</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">How do I get started?</h3>
            <p className="text-zinc-400">Click the "Get Started" button to join our waitlist or request early access.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Put Your Data to Work?</h2>
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
          Click 'Get Started' to join our waitlist, and tell us how you'd want us to help turn your data into real, actionable statements.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-black text-center border-t border-zinc-800">
        <div className="text-zinc-400">© 2025 NodeScale. Built for Kenya.</div>
        <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 inline-block">Sign Up</a>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/waitlist" element={<Waitlist />} />
    </Routes>
  );
}

export default App;