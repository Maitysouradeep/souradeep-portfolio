"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume ↗", href: "/resume.pdf", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        left-0
        top-0
        z-[100]
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? `
              border-b
              border-[var(--border)]
              bg-[var(--background)]/80
              backdrop-blur-xl
              shadow-[0_8px_30px_rgba(0,0,0,0.04)]
              dark:shadow-[0_8px_30px_rgba(0,0,0,0.18)]
            `
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          sm:px-10
          lg:px-16
        "
      >
        <div className="flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            data-cursor
            className="
              group
              relative
              z-10
              text-xl
              font-semibold
              tracking-[-0.04em]
              text-[var(--foreground)]
            "
          >
            Souradeep
            <span
              className="
                ml-1
                text-[var(--accent)]
                transition-opacity
                duration-300
                group-hover:opacity-60
              "
            >
              .
            </span>
          </Link>

          {/* Desktop navigation */}
          <div
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                data-cursor
                className="
    group
    relative
    py-2
    text-[13px]
    text-[var(--muted)]
    transition-colors
    duration-300
    hover:text-[var(--foreground)]
  "
              >
                {item.label}

                <span
                  className="
      absolute
      bottom-0
      left-0
      h-px
      w-0
      bg-[var(--accent)]
      transition-all
      duration-300
      group-hover:w-full
    "
                />
              </a>
            ))}
          </div>

          {/* Right side spacer */}
          <div className="flex items-center">
            {/* Mobile menu */}
            <button
              type="button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--surface)]/60
                text-[var(--foreground)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[var(--accent)]
                md:hidden
              "
            >
              {isOpen ? (
                <X size={18} strokeWidth={1.7} />
              ) : (
                <Menu size={18} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-400
            md:hidden
            ${isOpen ? "max-h-80 pb-5 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]/95
              p-2
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
              backdrop-blur-xl
              dark:shadow-[0_15px_50px_rgba(0,0,0,0.25)]
            "
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                data-cursor
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-[var(--muted)]
                  transition-all
                  duration-300
                  hover:bg-[var(--surface-soft)]
                  hover:text-[var(--foreground)]
                "
              >
                <span>{item.label}</span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    text-[var(--muted-soft)]
                  "
                >
                  0{index + 1}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
