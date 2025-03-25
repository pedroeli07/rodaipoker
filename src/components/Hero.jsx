import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Rectangle } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Background image with motion */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src={Rectangle} 
          alt='Background Hero' 
          className='w-2/3 h-2/3 object-cover'
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 z-1"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent opacity-100 z-1"></div>
      </motion.div>
      
      {/* Decorative background streaks */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* Diagonal streak 1 */}
        <motion.div 
          className="absolute h-[2px] w-[20vw] bg-purple-400/30 backdrop-blur-sm"
          style={{ 
            top: '15%', 
            left: '5%', 
            transform: 'rotate(35deg)',
            transformOrigin: 'left center' 
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '30vw', opacity: 0.3 }}
          transition={{ 
            duration: 2, 
            delay: 0.2,
            ease: "easeOut" 
          }}
        />
        
        {/* Diagonal streak 2 */}
        <motion.div 
          className="absolute h-[3px] w-[25vw] bg-[#a78bff]/40 backdrop-blur-sm"
          style={{ 
            top: '35%', 
            left: '10%', 
            transform: 'rotate(-15deg)',
            transformOrigin: 'left center' 
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '35vw', opacity: 0.4 }}
          transition={{ 
            duration: 2.5, 
            delay: 0.5,
            ease: "easeOut" 
          }}
        />
        
        {/* Diagonal streak 3 */}
        <motion.div 
          className="absolute h-[1px] w-[15vw] bg-[#b69eff]/25 backdrop-blur-sm"
          style={{ 
            top: '55%', 
            left: '20%', 
            transform: 'rotate(45deg)',
            transformOrigin: 'left center' 
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '25vw', opacity: 0.25 }}
          transition={{ 
            duration: 1.8, 
            delay: 0.8,
            ease: "easeOut" 
          }}
        />
        
        {/* Vertical streak */}
        <motion.div 
          className="absolute w-[2px] h-[30vh] bg-[#8e75f7]/35 backdrop-blur-sm"
          style={{ 
            top: '20%', 
            right: '35%'
          }}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '40vh', opacity: 0.35 }}
          transition={{ 
            duration: 2.2, 
            delay: 1,
            ease: "easeOut" 
          }}
        />
        
        {/* Pulsing glow effect */}
        <motion.div 
          className="absolute w-[100px] h-[100px] rounded-full bg-[#6E56E3]/10 backdrop-blur-md"
          style={{ 
            bottom: '30%', 
            left: '15%'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "loop" 
          }}
        />
      </div>
      
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
          <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='w-1 sm:h-80 h-40 violet-gradient'
          />
        </div>

        <div className="relative z-10">
          <div className="relative">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1], 
                  scale: [0, 1.2, 0.8, 1] 
                }}
                transition={{ 
                  duration: 2, 
                  delay: 0.3,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className='w-4 h-4 rounded-full bg-[#6E56E3] mr-3 flex-shrink-0'
              />
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`${styles.heroHeadText} text-white`}
              >
                Eleve seu <span className='text-[#6E56E3]'>jogo</span>
              </motion.h1>
            </div>
            
            <div className="flex items-center mt-1 ml-8">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1], 
                  scale: [0, 1.2, 0.8, 1] 
                }}
                transition={{ 
                  duration: 2, 
                  delay: 0.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className='w-4 h-4 rounded-full bg-[#6E56E3] mr-3 flex-shrink-0'
              />
              <motion.h1
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`${styles.heroHeadText} text-white`}
              >
                Economize <span className='text-[#6E56E3]'>tempo</span>
              </motion.h1>
            </div>
            
            <div className="flex items-center mt-1 ml-16">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1], 
                  scale: [0, 1.2, 0.8, 1] 
                }}
                transition={{ 
                  duration: 2, 
                  delay: 0.7,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className='w-4 h-4 rounded-full bg-[#6E56E3] mr-3 flex-shrink-0'
              />
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={`${styles.heroHeadText} text-white`}
              >
                Evolua com <span className='text-[#6E56E3]'>confiança</span>
              </motion.h1>
            </div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
          
          </motion.h1>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-64 right-10 z-30"
      >
        <a 
          href="https://api.whatsapp.com/send/?phone=5531999021329&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+Roda%C3%AD+Sims&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#3a2b83] hover:bg-[#5841c2] text-white font-bold py-3 px-6 rounded-lg 
                            shadow-lg transform transition-all duration-300 hover:scale-105 
                            flex items-center backdrop-blur-sm bg-opacity-80">
            <span>Solicite sua proposta personalizada</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </button>
        </a>
      </motion.div>

      {/* Wrapper para o ComputersCanvas com z-index mais alto */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="pointer-events-auto h-full mt-12 cursor-pointer">
          <ComputersCanvas />
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30 pointer-events-none'>
        <a href='#about' className="pointer-events-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
