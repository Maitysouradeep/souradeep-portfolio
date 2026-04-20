'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-dark-surface"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate developer with 5+ years of experience building web applications. I specialize in creating beautiful, intuitive user interfaces with a strong focus on performance and user experience.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              My journey started with a curiosity about how things work on the web. Over the years, I've honed my skills in modern frontend technologies and best practices, always staying updated with the latest trends.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-8 border border-blue-200 dark:border-blue-900"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🎓 Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor's in Computer Science
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  💼 Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  5+ years as Full-Stack Developer
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🚀 Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Modern Web Technologies & Performance
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}