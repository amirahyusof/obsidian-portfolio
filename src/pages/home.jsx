// This is the hero page component

import { Code2, ArrowRight } from 'lucide-react';

export default function Home({ navigateTo }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20text-[#f3f4f6]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon divider */}
        <div className="mb-6 inline-block">
          <div className="flex items-center gap-2 text-[#7dd3fc] mb-4 justify-center">
            <div className="w-12 h-0.5 bg-linear-to-r from-[#7dd3fc] to-[#c084fc]"></div>
            <Code2 className="w-5 h-5 animate-pulse" />
            <div className="w-12 h-0.5 bg-linear-to-l from-[#7dd3fc] to-[#c084fc]"></div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r from-[#7dd3fc] via-[#c084fc] to-[#f472b6] bg-clip-text text-transparent">
            Your Name
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-4xl mb-8 text-[#9ca3af] font-light">
          Full-Stack Developer crafting modern, scalable web solutions
        </p>

        {/* Short bio */}
        <div className="max-w-2xl mx-auto mb-12 text-lg text-[#d1d5db] leading-relaxed">
          <p>
            I’m <span className="text-accent">Your Name</span>, a full-stack developer passionate about
            building performant and user-focused applications. I specialize in{" "}
            <span className="text-[#7dd3fc] font-semibold">Next.js, Node.js,</span> and{" "}
            <span className="text-[#7dd3fc] font-semibold">TypeScript</span>, creating products that merge
            design clarity with clean architecture.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => navigateTo('projects')}
            className="group relative px-8 py-4 rounded-full bg-linear-to-r from-[#7dd3fc] via-[#c084fc] to-[#f472b6] text-gray-800 font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2 ">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => navigateTo('contact')}
            className="px-8 py-4 border-2 border-[#7dd3fc]/50 rounded-full font-semibold hover:bg-[#7dd3fc]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className='text-[#7dd3fc]'>
              Get In Touch
            </span>
            
          </button>
        </div>
      </div>
    </div>
  );
}
