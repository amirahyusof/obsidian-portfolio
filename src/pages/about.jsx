//this is about page component

import { ArrowRight, Download } from 'lucide-react';

export default function About({ navigateTo }) {
  return (
    <div className="min-h-screen flex items-center pt-20 justify-center bg-obsidian text-[#f3f4f6]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#7dd3fc] via-fuchsia-400 to-[#c084fc] bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="h-1 w-20 bg-accent mb-12"></div>

        <div className="bg-surface rounded-3xl p-8 mb-20 md:p-12 border border-white shadow-lg">
          <p className="text-md md:text-xl text-textSecondary leading-relaxed mb-6">
            I’m a full-stack developer who loves turning ideas into interactive
            digital experiences. From building responsive front-ends in
            <span className="text-accent font-semibold"> React & Next.js</span> 
            to crafting scalable APIs with 
            <span className="text-accent font-semibold"> Node.js & Supabase</span>,
            I enjoy bridging design and engineering to create seamless, high-impact solutions.
          </p>

          <p className="text-md md:text-xl text-textSecondary leading-relaxed mb-6">
            My focus is on clean architecture, performance, and maintainability.
            Whether it’s designing elegant UI components or integrating real-time
            databases, I aim to build software that’s both visually beautiful and
            technically solid.
          </p>

          <p className="text-md md:text-xl text-textSecondary leading-relaxed mb-12">
            Outside of coding, I love exploring new tech stacks, automating
            workflows, and mentoring others who want to start their own journey
            in web development.
          </p>

          <div className="flex gap-4 text-center">
            <button className="px-6 py-3 rounded-full border border-[#7dd3fc]/20 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <Download className="w-4 h-4" />
              <a
                href="#" // Replace '#' with the actual resume link
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-md text-[#7dd3fc] hover:text-[#c084fc]">Download Resume</span>
              </a>
            </button>
            <button
              onClick={() => navigateTo('projects')}
              className="flex items-center gap-2 group"
            >
              <span className="text-md text-[#7dd3fc] hover:text-[#c084fc] group-hover:brightness-125 transition-colors">
                Explore My Projects
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#7dd3fc]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
