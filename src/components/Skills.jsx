import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript']
    },
    {
      title: 'Backend Development',
      skills: ['Flask', 'RESTful APIs', 'Server Architecture']
    },
    {
      title: 'Database & Tools',
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code']
    },
    {
      title: 'Core Concepts',
      skills: ['Data Structures & Algorithms', 'Computer Networks', 'System Design']
    },
    {
      title: 'Specialized Skills',
      skills: ['Authentication Systems', 'Problem Solving', 'Cloud Computing']
    }
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Skills
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to build exceptional solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-2xl hover:shadow-lg hover:shadow-space-blue/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-space-blue">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-space-darker border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-space-blue hover:text-space-blue transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
