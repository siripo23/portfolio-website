import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'BioFaceShield',
      subtitle: 'Intelligent Authentication System',
      description: 'A sophisticated face-based authentication system using Python with real-user validation during signup/login. Prevents unauthorized access with a focus on reliability and fraud reduction. Features advanced computer vision algorithms and secure authentication protocols.',
      tech: ['Python', 'Computer Vision', 'Authentication', 'Security', 'Face Recognition'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      featured: true
    },
    {
      title: 'EduMaster',
      subtitle: 'AI-Based Adaptive Learning & Test Generation',
      description: 'Web-based platform for PUC students (NEET & JEE prep) featuring user authentication, stream selection, rule-based adaptive test generation, performance tracking, and integrated PDFs with past question papers. Built to enhance learning outcomes through intelligent assessment.',
      tech: ['Web Development', 'AI', 'Python', 'Database', 'MySQL', 'Adaptive Learning'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      featured: true
    }
  ]

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-space-darker to-space-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various technologies
          </p>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-2xl hover:shadow-xl hover:shadow-space-blue/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-space-blue">{project.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {project.featured && (
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-space-blue to-space-purple rounded-full text-xs font-semibold mb-2">
                            FEATURED
                          </span>
                        )}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-space-blue font-semibold text-lg mb-4">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-space-blue/10 border border-space-blue/30 rounded-full text-sm text-space-blue hover:bg-space-blue/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Siripo23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-space-blue to-space-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-space-blue/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
