import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Information Science And Engineering',
      institution: 'Vidyavardhaka College of Engineering',
      period: '2023 – 2027',
      grade: 'CGPA: 9.26',
      icon: '🎓'
    },
    {
      degree: 'Pre-University Education',
      field: 'Science Stream',
      institution: 'PACE UM PU College, Shimoga',
      period: '2021 – 2023',
      grade: 'Grade: 92.16%',
      icon: '📖'
    }
  ]

  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Education
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-space-blue to-space-purple"></div>

            <div className="space-y-12">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 w-full">
                    <div className="glass-effect p-6 rounded-2xl hover:shadow-lg hover:shadow-space-blue/20 transition-all duration-300">
                      <div className="text-4xl mb-4">{edu.icon}</div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{edu.degree}</h3>
                      <p className="text-space-blue font-semibold mb-2">{edu.field}</p>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-gray-400">{edu.period}</span>
                        <span className="px-3 py-1 bg-gradient-to-r from-space-blue to-space-purple rounded-full text-sm font-semibold">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-gradient-to-r from-space-blue to-space-purple rounded-full border-4 border-space-dark z-10"></div>

                  <div className="flex-1 w-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
