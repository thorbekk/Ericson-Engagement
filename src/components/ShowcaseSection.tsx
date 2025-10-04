import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  ImageIcon, 
  Rocket, 
  Calendar, 
  Building2, 
  CalendarDays 
} from 'lucide-react';

const services = [
  {
    title: 'E-commerce Store',
    tagline: 'High-converting Shopify & WooCommerce stores.',
    icon: ShoppingBag,
    gradient: 'from-green-400 via-emerald-500 to-green-600',
    glowColor: 'rgba(34,197,94,0.6)',
    shadowColor: 'shadow-green-500/50',
  },
  {
    title: 'Portfolio Website',
    tagline: 'Showcase your personal brand with style.',
    icon: ImageIcon,
    gradient: 'from-purple-400 via-violet-500 to-purple-600',
    glowColor: 'rgba(147,51,234,0.6)',
    shadowColor: 'shadow-purple-500/50',
  },
  {
    title: 'Landing Page',
    tagline: 'Campaign pages designed to convert.',
    icon: Rocket,
    gradient: 'from-blue-400 via-cyan-500 to-blue-600',
    glowColor: 'rgba(59,130,246,0.6)',
    shadowColor: 'shadow-blue-500/50',
  },
  {
    title: 'Event Page',
    tagline: 'Engaging pages for events & registrations.',
    icon: Calendar,
    gradient: 'from-pink-400 via-rose-500 to-pink-600',
    glowColor: 'rgba(236,72,153,0.6)',
    shadowColor: 'shadow-pink-500/50',
  },
  {
    title: 'Business Website',
    tagline: 'Professional websites for businesses.',
    icon: Building2,
    gradient: 'from-cyan-400 via-teal-500 to-cyan-600',
    glowColor: 'rgba(6,182,212,0.6)',
    shadowColor: 'shadow-cyan-500/50',
  },
  {
    title: 'Booking Page',
    tagline: 'Seamless booking & scheduling flows.',
    icon: CalendarDays,
    gradient: 'from-orange-400 via-amber-500 to-orange-600',
    glowColor: 'rgba(249,115,22,0.6)',
    shadowColor: 'shadow-orange-500/50',
  },
];

export function ShowcaseSection() {
  // Create enough duplicates for seamless infinite scroll
  const duplicatedServices = [...services, ...services, ...services];
  
  // Calculate the width of one set (each item is roughly 320px including spacing)
  const itemWidth = 320;
  const setWidth = services.length * itemWidth;

  return (
    <section id="showcase" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            What I Can Build
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From e-commerce stores to portfolio sites and landing pages, I create stunning websites that convert visitors into customers.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden py-8">
          {/* Main Carousel */}
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [-setWidth, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {duplicatedServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <motion.div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 relative group w-[300px]"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Outer Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)`,
                      filter: 'blur(30px)',
                    }}
                  />
                  
                  {/* Glassmorphism Card */}
                  <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl border border-white/20 group-hover:border-white/40 transition-all duration-500 p-8 h-80 flex flex-col items-center justify-center text-center">
                    
                    {/* Icon Container */}
                    <motion.div
                      className="relative mb-6"
                      animate={{
                        filter: [
                          `drop-shadow(0 0 20px ${service.glowColor})`,
                          `drop-shadow(0 0 30px ${service.glowColor})`,
                          `drop-shadow(0 0 20px ${service.glowColor})`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Icon Background Glow */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                        style={{
                          filter: 'blur(20px)',
                          transform: 'scale(1.5)',
                        }}
                      />
                      
                      {/* Main Icon */}
                      <motion.div
                        className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${service.gradient} p-4 ${service.shadowColor} shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                        whileHover={{
                          rotateY: 15,
                          rotateX: 15,
                          scale: 1.1,
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <IconComponent 
                          className="w-full h-full text-white drop-shadow-lg" 
                          strokeWidth={1.5}
                        />
                        
                        {/* 3D Effect Highlight */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-60" />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4">
                      <motion.h3
                        className={`text-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Glassmorphism Inner Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${service.glowColor}20, transparent, ${service.glowColor}10)`,
                      }}
                    />
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg, ${service.glowColor}, transparent, ${service.glowColor})`,
                      padding: '2px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'subtract',
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}