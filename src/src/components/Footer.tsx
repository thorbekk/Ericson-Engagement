import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 bg-gradient-to-t from-black to-purple-950/20 border-t border-purple-500/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="mb-8 relative"
        >
          <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,51,234,0.6)] px-4 py-2 leading-relaxed">
            Ericson Engagement
          </div>
          <motion.div
            className="absolute inset-0 text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-30 px-4 py-2 leading-relaxed"
            animate={{
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ericson Engagement
          </motion.div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.a
            href="mailto:contact@ericsonengagement.com"
            whileHover={{ 
              scale: 1.1,
              textShadow: "0 0 20px rgba(147,51,234,0.8)"
            }}
            className="inline-flex items-center space-x-3 text-xl text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.8)]"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.div>
            <span>contact@ericsonengagement.com</span>
          </motion.a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-500 mb-8"
        >
          Building the future of digital engagement, one pixel at a time.
        </motion.p>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/20 text-gray-600 text-sm"
        >
          © 2025 Ericson Engagement. All rights reserved.
        </motion.div>

        {/* Floating background elements */}
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
    </footer>
  );
}