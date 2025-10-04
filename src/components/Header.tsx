import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-lg bg-black/20 border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="text-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            © Ericson Engagement
          </div>
          <div className="absolute inset-0 text-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-50">
            © Ericson Engagement
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {[
            { name: 'Work', href: '#work' },
            { name: 'Showcase', href: '#showcase' },
            { name: 'Contact', href: 'mailto:contact@ericsonengagement.com' }
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 15px rgba(147,51,234,0.8)"
              }}
              className="relative text-white/80 hover:text-white transition-colors duration-300 cursor-pointer group"
            >
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"
                whileHover={{ boxShadow: "0 0 10px rgba(147,51,234,0.8)" }}
              />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}