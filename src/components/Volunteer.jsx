import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Volunteer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'INFOTHON 5.0',
      organization: 'VVCE',
      role: 'Hackathon Coordination',
      description: 'Coordinated and managed hackathon events, facilitating collaboration among participants and ensuring smooth execution of technical competitions.',
      icon: '💻'
    },
    {
      title: 'Chiguru – Youth for Seva',
      organization: 'Community Service',
      role: 'School Arts Initiative Volunteer',
      description: 'Volunteered in school arts initiatives, promoting creativity and cultural activities among students while contributing to community development.',
      icon: '🎨'
    }
  ]

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Volunteer Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-effect p-6 rounded-2xl hover:shadow-xl hover:shadow-space-purple/30 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{exp.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{exp.title}</h3>
                <p className="text-space-purple font-semibold mb-2">{exp.role}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.organization}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Volunteer
