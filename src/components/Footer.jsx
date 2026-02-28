import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400">
              © 2024 SIRI P O. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/Siripo23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-blue transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/siri-p-o-959747286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-blue transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:siripowork@gmail.com"
              className="text-gray-400 hover:text-space-blue transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
