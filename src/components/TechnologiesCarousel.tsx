import { motion } from 'motion/react';
import shopifyLogo from 'figma:asset/5579df22fbbaa047b087dcf53f3194a53f1876b4.png';
import vercelLogo from 'figma:asset/8f9174922e329cdbcaa6f79e18ae00c304169af8.png';
import webflowLogo from 'figma:asset/ef52a6b4c0f7dc3a775c114636fd594a688eee1d.png';
import reactLogo from 'figma:asset/d2b4ceefdabea0a6bde1756b02a339bdab3ab2c1.png';

const technologies = [
  { name: 'Shopify', logo: shopifyLogo, color: 'from-green-400 to-green-600' },
  { name: 'Vercel', logo: vercelLogo, color: 'from-gray-400 to-gray-600' },
  { name: 'Webflow', logo: webflowLogo, color: 'from-purple-400 to-purple-600' },
  { name: 'React', logo: reactLogo, color: 'from-cyan-400 to-cyan-600' },
];

export function TechnologiesCarousel() {
  // Create enough duplicates for seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies, ...technologies];
  
  // Calculate the width of one set (each item is roughly 220px including spacing)
  const itemWidth = 220;
  const setWidth = technologies.length * itemWidth;

  return (
    <div className="relative py-12 bg-gradient-to-br from-black via-purple-950/20 to-blue-950/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent z-10" />
      
      <motion.div
        className="flex space-x-20 whitespace-nowrap"
        animate={{
          x: [-setWidth, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 relative group"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-300 rounded-2xl"
                style={{
                  filter: 'contrast(1.2) saturate(1.1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.1))',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            
            {/* Glow effect on hover */}
            <motion.div
              className={`
                absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} 
                opacity-0 group-hover:opacity-20 blur-xl
                transition-opacity duration-300
              `}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/60 to-transparent z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/60 to-transparent z-20" />
    </div>
  );
}