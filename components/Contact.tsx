'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { useRef, useState } from 'react';

const CONTACT_EMAIL = 'maitysouradeep5@gmail.com';

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.523-.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44C23.2 24 24 23.22 24 22.26V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.605l-5.17-6.76L5.06 22H1.8l7.6-8.69L1.25 2H8.02l4.67 6.17L18.244 2Zm-1.14 17.96h1.803L7.084 3.9H5.15l11.954 16.06Z" />
    </svg>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError('');
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    setSubmitted(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!formRef.current) {
      setError('Unable to submit the form. Please try again.');
      return;
    }

    try {
      setSubmitting(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);

      setError(
        'Something went wrong while sending your message. Please try again or email me directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const socials = [
    {
      name: 'GitHub',
      handle: 'Maitysouradeep',
      url: 'https://github.com/Maitysouradeep',
      icon: <GithubIcon />,
    },
    {
      name: 'LinkedIn',
      handle: 'Souradeep Maity',
      url: 'https://www.linkedin.com/in/souradeep-maity-b62022257/',
      icon: <LinkedinIcon />,
    },
    {
      name: 'X',
      handle: '@SouradeepMaity4',
      url: 'https://x.com/SouradeepMaity4',
      icon: <XIcon />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--background)] px-5 py-24 text-[var(--foreground)] transition-colors duration-500 sm:px-8 lg:px-12"
    >
      {/* Large ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--muted)]"
        >
          <span className="text-[var(--accent)]">05</span>
          <span>Contact</span>
        </motion.div>

        {/* Big heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="max-w-6xl text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
            Let&apos;s make
            <br />
            <span className="text-[var(--accent)]">
              something.
            </span>
          </h2>

          <div className="mt-10 flex max-w-3xl flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              Have an opportunity, project idea, or just want to connect?
              I&apos;d be happy to hear from you.
            </p>

            <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* Contact content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Message panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10"
          >
            {/* Accent corner */}
            <div className="absolute right-0 top-0 h-24 w-24 bg-[var(--accent)]/[0.08]" />

            <div className="relative">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Start a conversation
                  </p>

                  <h3 className="mt-2 text-2xl font-medium">
                    Send me a message.
                  </h3>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] sm:flex">
                  <Send className="h-5 w-5 text-[var(--accent)]" />
                </div>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-7"
              >
                <div className="grid gap-7 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      disabled={submitting}
                      className="w-full border-b border-[var(--border)] bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-[var(--muted-soft)] focus:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      disabled={submitting}
                      className="w-full border-b border-[var(--border)] bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-[var(--muted-soft)] focus:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me what you're working on..."
                    disabled={submitting}
                    className="w-full resize-none border-b border-[var(--border)] bg-transparent pb-3 text-base leading-7 outline-none transition-colors placeholder:text-[var(--muted-soft)] focus:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-400">
                    {error}
                  </p>
                )}

                {/* Success */}
                {submitted && (
                  <div className="flex items-center gap-2 text-sm text-[var(--accent)]">
                    <Check className="h-4 w-4" />
                    <span>
                      Message sent successfully. I&apos;ll get back to you soon.
                    </span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  data-cursor
                  disabled={submitting}
                  className="group inline-flex items-center gap-4 bg-[var(--foreground)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--background)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Sending...' : 'Send Message'}

                  {!submitting && (
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  )}

                  {submitting && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >

            {/* Email card */}
            <div className="border border-[var(--border)] bg-[var(--surface)] p-7">
              <div className="mb-7 flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--accent)]" />

                <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Email
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all text-base font-medium transition-colors hover:text-[var(--accent)]"
                >
                  {CONTACT_EMAIL}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="shrink-0 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {copied && (
                <p className="mt-3 text-xs text-[var(--accent)]">
                  Email copied.
                </p>
              )}
            </div>

            {/* Location */}
            <div className="border border-[var(--border)] bg-[var(--surface)] p-7">
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[var(--accent)]" />

                <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Based in
                </span>
              </div>

              <p className="text-2xl font-medium">
                Kolkata, India
              </p>
            </div>

            {/* Social links */}
            <div className="border border-[var(--border)] bg-[var(--surface)]">
              <div className="border-b border-[var(--border)] px-7 py-5">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Connect
                </span>
              </div>

              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="group flex items-center justify-between border-b border-[var(--border)] px-7 py-5 last:border-b-0 transition-colors hover:bg-[var(--accent)] hover:text-black"
                >
                  <div className="flex items-center gap-4">
                    {social.icon}

                    <div>
                      <p className="text-sm font-medium">
                        {social.name}
                      </p>

                      <p className="mt-1 text-xs opacity-50">
                        {social.handle}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final footer statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-7 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:flex-row"
        >
          <span>Thanks for scrolling.</span>

          <span>
            Souradeep Maity · 2026
          </span>
        </motion.div>

      </div>
    </section>
  );
}