import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      title: 'Bachelor of Engineering',
      subtitle: 'Information Science And Engineering',
      organization: 'Vidyavardhaka College of Engineering',
      period: 'Sep 2023 - Jun 2027',
      type: 'Education',
      description: 'Currently pursuing B.E. with a CGPA of 9.26, focusing on software engineering, backend development, and system design. Strong foundations in Python and Java programming with expertise in Data Structures, Algorithms, Computer Networks, and Database Management Systems.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    }
  ]

  const achievements = [
    {
      title: 'Hackathon 2025',
      period: '2025',
      subtitle: 'INFOTHON 5.0 - VVCE',
      description: 'Participated in hackathon coordination at VVCE, facilitating collaboration among participants and ensuring smooth execution of technical competitions. Gained valuable experience in team coordination and event management.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Google Cloud Career Launchpad',
      period: '2025',
      subtitle: 'Cloud Engineer Track',
      description: 'Completed comprehensive cloud engineering training program focusing on Google Cloud Platform technologies, cloud infrastructure, deployment strategies, and scalable cloud solutions.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: 'Community Service',
      period: '2026',
      subtitle: 'Chiguru – Youth for Seva',
      description: 'Volunteered in school arts initiative, promoting creativity and cultural activities among students while contributing to community development and youth empowerment.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Experience
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Professional experience and achievements that showcase my growth as a software developer
          </p>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Education
            </h3>
            {education.map((edu, idx) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="glass-effect p-8 rounded-2xl hover:shadow-xl hover:shadow-space-blue/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-space-blue">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{edu.title}</h4>
                        <p className="text-space-blue font-semibold">{edu.subtitle}</p>
                        <p className="text-gray-400">{edu.organization}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="px-4 py-2 bg-gradient-to-r from-space-blue to-space-purple rounded-full text-sm font-semibold">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements & Recognition */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Achievements & Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-effect p-6 rounded-2xl hover:shadow-lg hover:shadow-space-purple/30 transition-all duration-300"
                >
                  <div className="text-space-purple mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-space-purple font-semibold mb-2">{achievement.subtitle}</p>
                  <p className="text-sm text-gray-400 mb-3">{achievement.period}</p>
                  <p className="text-gray-300 leading-relaxed text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
