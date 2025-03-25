import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, subtitle, icon: Icon }) => {
  const cardRef = useRef(null);
  const [hover, setHover] = useState(false);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring physics for smooth animation
  const xSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 30 });
  
  // Transform values for tilt effect
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  const glowX = useTransform(xSpring, [-1, 1], ["-120px", "120px"]);
  const glowY = useTransform(ySpring, [-1, 1], ["-120px", "120px"]);
  
  // Handle mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card (0-1)
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    
    // Normalize to -0.5 to 0.5 range for rotation
    x.set(xPos - 0.5);
    y.set(yPos - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full flex-1"
      style={{ perspective: 2000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className='relative w-[320px] h-[380px] mx-auto rounded-2xl cursor-pointer overflow-hidden'
        style={{
          rotateX: hover ? rotateX : 0,
          rotateY: hover ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        {/* Card background with glass effect */}
        <div className='hover:border-purple-200 hover:border-4 hover:shadow-2xl hover:shadow-purple-400 absolute inset-0 bg-tertiary rounded-[20px] backdrop-blur-sm bg-opacity-80 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-xl'></div>
        
        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 opacity-0 hover:opacity-70 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX}px ${glowY}px, rgba(110, 86, 227, 0.5), transparent 40%)`,
            transformStyle: "preserve-3d",
          }}
        />
        
        {/* Card content */}
        <div className='relative h-full flex flex-col justify-center items-center px-8 z-10 transform-style-3d'>
          <div className="mb-8 transform translate-z-10">
            <Icon 
              className="w-20 h-20 text-[#6E56E3]"
              strokeWidth={1.2}
            />
          </div>

          <h3 className='text-white text-[22px] font-bold text-center mb-4 transform translate-z-10'>
            {title}
          </h3>
          
          <p className='text-secondary text-[16px] text-center leading-relaxed transform translate-z-10 max-w-[250px]'>
            {subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="relative z-10">
        <p className={styles.sectionSubText}>Sobre nós</p>
        <h2 className={styles.sectionHeadText}>Elevando seu jogo com precisão e estratégia</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] mx-auto relative z-10'
      >
        <p className="mb-4">
          A Rodaí foi criada para facilitar o estudo técnico no poker. Combinando anos de experiência 
          em rodagem de mãos e conhecimento avançado nos melhores solvers, oferecemos soluções 
          precisas para jogadores que querem evoluir com confiança.
        </p>
        <p className="mb-4">
          Nossa equipe é formada por especialistas com vasta experiência, incluindo consultoria
          para jogadores lucrativos de high stakes.
        </p>
        <p className="flex flex-col sm:flex-row items-center mb-2 gap-2">
          <span className="font-bold text-white text-lg">Nosso primeiro produto é o</span>
          <span className="text-[#6E56E3] font-bold text-xl">Rodaí Sims</span>
        </p>
        <p className="flex flex-col sm:flex-row items-center mb-6 gap-2">
          <span className="font-bold text-white text-lg">Em breve lançaremos o</span>
          <span className="text-[#6E56E3] font-bold text-xl">Rodaí Acervo</span>
        </p>

       
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mt-8 mb-12"
        >
          <button 
            className="w-full bg-[#6E56E3]/20 p-6 rounded-lg border border-[#6E56E3]/30 flex justify-center items-center hover:bg-[#6E56E3]/30 transition-all duration-300"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999021329&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+Roda%C3%AD+Sims&type=phone_number&app_absent=0', '_blank')}
          >
            <span className="text-white text-2xl font-bold">Evolua com confiança</span>
          </button>
        </motion.div>
      </motion.div>

      {/* 3D floating cards section with enhanced perspective */}
      <div className='relative mt-20'>
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#6E56E3]/10 to-transparent rounded-3xl blur-3xl opacity-50" />
        
        <div className='flex flex-wrap justify-center gap-10 relative z-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
