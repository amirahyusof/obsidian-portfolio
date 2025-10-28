//This is the projects page component

import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#7dd3fc] via-fuchsia-400 to-[#c084fc] mb-6 text-center text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-[#7dd3fc] mb-4 mx-auto"></div>
        <p className="text-center text-[#9ca3af] mb-16 max-w-2xl mx-auto">
          A showcase of projects reflecting my passion for building scalable,
          performance-driven web apps from front-end to back-end.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#141421] rounded-2xl p-6 border border-[#c084fc] hover:border-[#7dd3fc]/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#7dd3fc]/20"
              >
                {/* Icon gradient */}
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-[#f3f4f6]" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-[#f3f4f6] group-hover:text-[#7dd3fc] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#141421] text-[#7dd3fc] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
