//this is contact page component

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-linear-to-b from-[#0b0b0e] via-[#111118] to-[#0b0b0e] text-gray-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#7dd3fc] via-[#c084fc] to-[#f472b6] bg-clip-text text-transparent">
          Let’s Build What Matters
        </h2>
        <div className="h-0.5 w-32 bg-linear-to-r from-[#7dd3fc] via-[#c084fc]/50 to-[#f472b6] mb-12 mx-auto rounded-full"></div>

        <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Whether it’s crafting a full-stack solution, elevating a brand, or experimenting with ideas —
          I’d love to collaborate and make something impactful.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              href: "mailto:example@gmail.com", // replace with your email
              icon: <Mail className="w-10 h-10 mx-auto mb-4 text-[#7dd3fc] group-hover:scale-110 transition-transform" />,
              title: "Email",
              text: "your email",
            },
            {
              href: "https://www.linkedin.com/in/your-linkedin",// replace with your LinkedIn
              icon: <Linkedin className="w-10 h-10 mx-auto mb-4 text-[#7dd3fc] group-hover:scale-110 transition-transform" />,
              title: "LinkedIn",
              text: "Connect professionally",
            },
            {
              href: "https://github.com/your-github",// replace with your GitHub
              icon: <Github className="w-10 h-10 mx-auto mb-4 text-[#7dd3fc] group-hover:scale-110 transition-transform" />,
              title: "GitHub",
              text: "Explore my builds",
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              className="group p-8 bg-linear-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#7dd3fc]/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(192,38,211,0.3)]"
            >
              {link.icon}
              <h3 className="font-semibold mb-1 text-lg text-white">{link.title}</h3>
              <p className="text-sm text-gray-400">{link.text}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Soft glow ring accent */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-linear-to-r from-purple-700/20 via-fuchsia-500/10 to-purple-700/20 blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
    </section>
  );
}
