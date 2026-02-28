import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: 'Google Cloud Career Launchpad',
      subtitle: 'Cloud Engineer Track',
      issuer: 'Google Cloud',
      icon: '☁️'
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
                <p className="text-gray-300 text-center">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
