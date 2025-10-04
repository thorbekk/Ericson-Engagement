import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Hero() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <section 
      className="relative h-[75vh] flex items-center justify-center bg-gradient-to-br from-black via-purple-950/20 to-blue-950/20 overflow-hidden"
      onClick={handleClick}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(147,51,234,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(6,182,212,0.2) 100%)",
            "linear-gradient(225deg, rgba(59,130,246,0.2) 0%, rgba(6,182,212,0.2) 50%, rgba(147,51,234,0.2) 100%)",
            "linear-gradient(315deg, rgba(6,182,212,0.2) 0%, rgba(147,51,234,0.2) 50%, rgba(59,130,246,0.2) 100%)",
            "linear-gradient(135deg, rgba(147,51,234,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(6,182,212,0.2) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />



      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 20, 0],
            opacity: [0.3, 1, 0.3, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]"
        >
          We build digital experiences that{' '}
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px rgba(147,51,234,0.8)",
                "0 0 40px rgba(59,130,246,0.8)",
                "0 0 20px rgba(147,51,234,0.8)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
          >
            engage
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Spectacular, precise, and unforgettable web design that captivates your audience and drives results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.a
            href="mailto:contact@ericsonengagement.com"
            className="inline-block"
          >
            <Button 
              size="lg"
              className="relative px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 text-lg">Contact Us</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </Button>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}