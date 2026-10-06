import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: 'React Training – Incture Technologies',
      subtitle: 'Industrial Training Certificate',
      issuer: 'Incture Technologies Pvt. Ltd.',
      icon: '⚛️',
      certificateLink: '/Siri P O_React_Certificate.pdf'
    }
  ]

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Certifications
          </h2>

          <div className="flex justify-center">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-8 rounded-2xl hover:shadow-xl hover:shadow-space-blue/30 transition-all duration-300 max-w-md w-full"
              >
                <div className="text-6xl mb-4 text-center">{cert.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-center text-white">
                  {cert.title}
                </h3>
                <p className="text-space-blue font-semibold text-center mb-2">{cert.subtitle}</p>
                <p className="text-gray-300 text-center mb-6">{cert.issuer}</p>
                <div className="text-center">
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-space-blue to-space-purple rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-space-blue/50 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
