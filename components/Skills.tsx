'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers3,
  Code2,
  LayoutGrid,
  Server,
  Database,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiAxios,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiLangchain,
  SiTensorflow,
  SiKeras,
  SiStreamlit,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si';

import { TbSql, TbDatabaseSearch } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { FiCpu, FiGitBranch } from 'react-icons/fi';

type Category =
  | 'All'
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'AI & Tools';

type Skill = {
  name: string;
  category: Exclude<Category, 'All'>;
  icon: React.ElementType;
};

const skills: Skill[] = [
  // LANGUAGES
  {
    name: 'JavaScript',
    category: 'Languages',
    icon: SiJavascript,
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    icon: SiTypescript,
  },
  {
    name: 'Python',
    category: 'Languages',
    icon: SiPython,
  },
  {
    name: 'Java',
    category: 'Languages',
    icon: FaJava,
  },
  {
    name: 'SQL',
    category: 'Languages',
    icon: TbSql,
  },

  // FRONTEND
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: SiHtml5,
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    icon: SiCss,
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: SiReact,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: SiNextdotjs,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: SiTailwindcss,
  },
  {
    name: 'Vite',
    category: 'Frontend',
    icon: SiVite,
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    icon: SiFramer,
  },

  // BACKEND
  {
    name: 'Node.js',
    category: 'Backend',
    icon: SiNodedotjs,
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: SiExpress,
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    icon: SiFastapi,
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    icon: FiGitBranch,
  },
  {
    name: 'Axios',
    category: 'Backend',
    icon: SiAxios,
  },

  // DATABASES
  {
    name: 'MongoDB',
    category: 'Databases',
    icon: SiMongodb,
  },
  {
    name: 'Mongoose',
    category: 'Databases',
    icon: SiMongoose,
  },
  {
    name: 'MySQL',
    category: 'Databases',
    icon: SiMysql,
  },
  {
    name: 'Firebase',
    category: 'Databases',
    icon: SiFirebase,
  },
  {
    name: 'Firestore',
    category: 'Databases',
    icon: SiFirebase,
  },
  {
    name: 'Vector Databases',
    category: 'Databases',
    icon: TbDatabaseSearch,
  },

  // AI + TOOLS
  {
    name: 'LangChain',
    category: 'AI & Tools',
    icon: SiLangchain,
  },
  {
    name: 'LangGraph',
    category: 'AI & Tools',
    icon: FiGitBranch,
  },
  {
    name: 'RAG',
    category: 'AI & Tools',
    icon: FiCpu,
  },
  {
    name: 'Embeddings',
    category: 'AI & Tools',
    icon: FiCpu,
  },
  {
    name: 'TensorFlow',
    category: 'AI & Tools',
    icon: SiTensorflow,
  },
  {
    name: 'Keras',
    category: 'AI & Tools',
    icon: SiKeras,
  },
  {
    name: 'Streamlit',
    category: 'AI & Tools',
    icon: SiStreamlit,
  },
  {
    name: 'Git',
    category: 'AI & Tools',
    icon: SiGit,
  },
  {
    name: 'GitHub',
    category: 'AI & Tools',
    icon: SiGithub,
  },
  {
    name: 'Vercel',
    category: 'AI & Tools',
    icon: SiVercel,
  },
];

const categories: {
  name: Category;
  icon: React.ElementType;
}[] = [
  {
    name: 'All',
    icon: Layers3,
  },
  {
    name: 'Languages',
    icon: Code2,
  },
  {
    name: 'Frontend',
    icon: LayoutGrid,
  },
  {
    name: 'Backend',
    icon: Server,
  },
  {
    name: 'Databases',
    icon: Database,
  },
  {
    name: 'AI & Tools',
    icon: Sparkles,
  },
];

const INITIAL_VISIBLE = 20;

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('All');

  const [showAll, setShowAll] = useState(false);

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        );

  const displayedSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_VISIBLE);

  const hiddenCount =
    filteredSkills.length - INITIAL_VISIBLE;

  const hasMore = hiddenCount > 0;

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        px-5
        py-24
        text-[var(--foreground)]
        transition-colors
        duration-500
        sm:px-8
        lg:px-12
      "
    >
      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(to_right,var(--grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ================================= */}
        {/* HEADING */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-9
            border-b
            border-[var(--border)]
            pb-6
          "
        >
          <div className="flex items-end justify-between">

            <div>
              <p
                className="
                  mb-3
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[var(--accent)]
                "
              >
                03 — TECH STACK
              </p>

              <h2
                className="
                  text-[clamp(3rem,7vw,5.5rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.065em]
                "
              >
                Tech Stack
              </h2>
            </div>

            <div className="hidden text-right sm:block">
              <p
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-[var(--muted-soft)]
                "
              >
                SOURAADEEP / 2026
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[var(--muted)]
                "
              >
                Tools I build with.
              </p>
            </div>

          </div>
        </motion.div>


        {/* ================================= */}
        {/* CATEGORY FILTER */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mb-7
            overflow-x-auto
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-1.5
          "
        >
          <div className="flex min-w-max gap-1">

            {categories.map((category) => {
              const Icon = category.icon;

              const active =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() =>
                    handleCategoryChange(
                      category.name
                    )
                  }
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    px-3.5
                    py-2.5
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.08em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? 'bg-[var(--foreground)] text-[var(--background)]'
                        : 'text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)]'
                    }
                  `}
                >
                  <Icon
                    size={14}
                    strokeWidth={1.7}
                  />

                  {category.name}
                </button>
              );
            })}

          </div>
        </motion.div>


        {/* ================================= */}
        {/* TECH STACK GRID */}
        {/* ================================= */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              grid
              grid-cols-2
              gap-2
              sm:grid-cols-3
              md:grid-cols-4
              xl:grid-cols-5
            "
          >

            {displayedSkills.map(
              (skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    initial={{
                      opacity: 0,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.018,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      group
                      flex
                      h-[62px]
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-[var(--border)]
                      bg-[var(--surface)]
                      px-3
                      transition-all
                      duration-200
                      hover:border-[var(--accent)]
                      hover:bg-[var(--surface-soft)]
                    "
                  >

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-[var(--border)]
                        bg-[var(--surface-soft)]
                        text-[17px]
                        text-[var(--foreground)]
                        transition-all
                        duration-200
                        group-hover:border-[var(--accent)]
                        group-hover:bg-[var(--accent)]
                        group-hover:text-[#08090a]
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                      />
                    </div>


                    {/* NAME */}

                    <div className="min-w-0">

                      <p
                        className="
                          truncate
                          text-[12px]
                          font-medium
                          tracking-tight
                        "
                      >
                        {skill.name}
                      </p>

                      <p
                        className="
                          mt-0.5
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-[0.13em]
                          text-[var(--muted-soft)]
                        "
                      >
                        {skill.category}
                      </p>

                    </div>

                  </motion.div>
                );
              }
            )}

          </motion.div>

        </AnimatePresence>


        {/* ================================= */}
        {/* MORE / LESS BUTTON */}
        {/* ================================= */}

        {hasMore && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-6
              flex
              justify-center
            "
          >

            <button
              onClick={() =>
                setShowAll((current) => !current)
              }
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-5
                py-2.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-[var(--muted)]
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:bg-[var(--accent)]
                hover:text-[#08090a]
              "
            >

              {showAll
                ? 'Show Less'
                : `+ ${hiddenCount} More`}

              <ChevronDown
                size={13}
                className={`
                  transition-transform
                  duration-300
                  ${
                    showAll
                      ? 'rotate-180'
                      : ''
                  }
                `}
              />

            </button>

          </motion.div>
        )}


        {/* ================================= */}
        {/* BOTTOM META */}
        {/* ================================= */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-[var(--border)]
            pt-4
          "
        >

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[var(--muted-soft)]
            "
          >
            {filteredSkills.length} technologies
          </span>

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[var(--muted-soft)]
            "
          >
            BUILD · LEARN · SHIP
          </span>

        </div>

      </div>
    </section>
  );
}