import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function EngagementMetrics() {
  const [count, setCount] = useState(0);
  const targetValue = 327;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < targetValue) {
          return prev + Math.ceil((targetValue - prev) / 10);
        }
        return targetValue;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(147,51,234,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(6,182,212,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(147,51,234,0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main metric */}
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-8xl md:text-9xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(147,51,234,0.8)]"
              animate={{
                textShadow: [
                  "0 0 50px rgba(147,51,234,0.8)",
                  "0 0 80px rgba(59,130,246,0.8)",
                  "0 0 50px rgba(6,182,212,0.8)",
                  "0 0 50px rgba(147,51,234,0.8)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              +{count}%
            </motion.span>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 text-8xl md:text-9xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent blur-2xl opacity-50"
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              +{count}%
            </motion.div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mt-6 mb-4"
          >
            Engagement Boost
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Average increase in user engagement across all client projects. 
            Ready to transform your digital presence?
          </motion.p>

          {/* Floating particles around the metric */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
              initial={{
                x: Math.cos((i * 30) * Math.PI / 180) * 200,
                y: Math.sin((i * 30) * Math.PI / 180) * 200,
              }}
              animate={{
                x: Math.cos((i * 30) * Math.PI / 180) * (200 + Math.sin(Date.now() / 1000 + i) * 50),
                y: Math.sin((i * 30) * Math.PI / 180) * (200 + Math.cos(Date.now() / 1000 + i) * 50),
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}