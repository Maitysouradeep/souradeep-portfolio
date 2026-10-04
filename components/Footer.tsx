'use client';

import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/Maitysouradeep',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/souradeep-maity-b62022257/',
  },
  {
    label: 'X',
    href: 'https://x.com/SouradeepMaity4',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#08090a] px-6 py-16 text-[#f5f5f0] md:px-10 lg:px-16">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Accent glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b7ff3c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1380px]">
        {/* Top section */}
        <div className="flex flex-col gap-12 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          {/* Main message */}
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#b7ff3c]">
              Available for opportunities
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Let's build
              <br />
              <span className="text-white/40">something useful.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/50 md:text-lg">
              Open to software development opportunities, full-stack projects,
              and interesting products where I can build, learn and contribute.
            </p>
          </div>

          {/* Contact */}
          <div className="w-full max-w-sm">
            <a
              href="mailto:maitysouradeep5@gmail.com"
              className="group flex items-center justify-between border-b border-white/10 py-5 transition-colors hover:border-[#b7ff3c]/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                  <Mail className="h-4 w-4 text-[#b7ff3c]" />
                </div>

                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Email
                  </p>
                  <p className="text-sm text-white/80">
                    maitysouradeep5@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7ff3c]" />
            </a>

            <div className="flex items-center gap-4 border-b border-white/10 py-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                <MapPin className="h-4 w-4 text-[#b7ff3c]" />
              </div>

              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Location
                </p>
                <p className="text-sm text-white/80">Kolkata, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-8 pt-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-xl font-semibold tracking-tight"
            >
              Souradeep
              <span className="h-2 w-2 rounded-full bg-[#b7ff3c] transition-transform group-hover:scale-125" />
            </a>

            <p className="mt-2 text-xs text-white/35">
              Full-Stack Developer · AI Builder
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs uppercase tracking-[0.14em] text-white/55 transition-all hover:border-[#b7ff3c]/50 hover:text-[#b7ff3c]"
              >
                {link.label}

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/30">
            © {currentYear} Souradeep Maity
          </p>
        </div>
      </div>
    </footer>
  );
}