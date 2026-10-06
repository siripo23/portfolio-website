import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-space-dark to-space-darker">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A curious and driven fresher ready to turn classroom knowledge into real-world impact
          </p>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect p-8 md:p-12 rounded-2xl text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Hi, I'm SIRI P O
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a final-year Information Science & Engineering student at Vidyavardhaka College of Engineering, 
                currently maintaining a CGPA of 9.26. I enjoy solving problems through code and am passionate 
                about learning new technologies by building real projects.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From SAP development during my internship at Incture to building full-stack web applications, 
                I'm constantly pushing myself to grow. I work primarily with Python, Java, and web technologies, 
                and I'm always excited to take on new challenges.
              </p>

              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="/resume.pdf"
                  download="SIRI_PO_Resume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-space-blue to-space-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-space-blue/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
