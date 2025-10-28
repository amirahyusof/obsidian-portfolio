//This is footer page component
import React from 'react'

function Footer() {
  return (
    <footer className="relative bg-linear-to-r from-[#0b0b0e] via-[#111118] to-[#0b0b0e] border-t border-white/10 backdrop-blur-md text-gray-400 py-6 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Name</span> {/* changes to your name */}
          — Crafted with precision, passion, and purpose.
        </p>
        <div className="mt-3 text-xs text-gray-500">
          Designed in Obsidian Gradient
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-[#7dd3fc] via-fuchsia-400/30 to-[#c084fc] blur-sm"></div>
    </footer>
  )
}

export default Footer

