'use client';

import { motion} from "framer-motion";


export default function Hero(){

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChilder: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        }
    };

       return(
        <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-surface"
        >
            <motion.div
            className="text-center max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >

                <motion.div variants={itemVariants} className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-6 animate-pulse"/>
                </motion.div>

                <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
                >
                    Hi, I'm <span className="gradient-text">Your Name</span>
                </motion.h1>

                <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600  dark:text-gray-400 mb-4"
                >
                    Full-Stack Developer & UI/UX Enthusiast
                </motion.p>

                <motion.p
                variants={itemVariants}
                className="text-lg text-gray-500 dark:text-gray-500 mb-8 max-w-2xl mx-auto"
                >
                    I craft beautiful, high-performace web expirences that solve real problems. Specialised in React, Next.js and modern web technologies.
                </motion.p>

                <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#projects"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        View My Projects
                    </a>
                    <a 
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        Download Resume
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                variants={itemVariants}
                className="mt-16 flex justify-center"
                animate={{y : [ 0, 10, 0 ]}}
                transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="text=-gray-600 dark:text-gray-400">↓</div>
                </motion.div>
            </motion.div>
        </section>
       );
}