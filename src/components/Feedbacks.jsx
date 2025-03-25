import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Importando as imagens
import luish from "../assets/luish.png";
import mateustome from "../assets/mateustome.png";
import carlosribeiro from "../assets/Carlos-Ribeiro.png";
import heitorcamargos from "../assets/Heitor-Camargos-1.png";
import matheuscunha from "../assets/Matheus-Cunha.png";

// Componente para as estrelas de avaliação
const StarRating = ({ count = 5 }) => {
  return (
    <div className="flex space-x-1 mb-3">
      {[...Array(count)].map((_, i) => (
        <svg 
          key={i}
          className="w-5 h-5 text-[#6E56E3]" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ index, testimonial, name, designation, image }) => {
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos - 0.5);
    y.set(yPos - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className='w-full sm:w-[380px]'
      style={{ perspective: 2000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className='bg-tertiary p-8 rounded-2xl h-[450px] w-full flex flex-col gap-5 backdrop-blur-sm bg-opacity-80 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-xl'
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-10 blur-lg group-hover:opacity-20 transition duration-1000"></div>
        
        {/* Quote icon with 3D effect */}
        <div className="absolute -top-5 -left-5 transform translate-z-12">
          <div className="w-10 h-10 flex items-center justify-center bg-[#6E56E3] rounded-full shadow-lg transform-style-3d">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        <StarRating />

        <div className='flex-grow overflow-y-auto custom-scrollbar'>
          <p className='text-white text-[16px] leading-relaxed tracking-wide transform translate-z-6'>
            {testimonial}
          </p>
        </div>

        <div className='mt-4 flex items-center gap-4 transform translate-z-6'>
          <div className='w-32 h-32 rounded-full overflow-hidden ring-2 ring-[#6E56E3]/50'>
            <img 
              src={image}
              alt={name}
              className='w-full h-full object-cover'
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6E56E3&color=fff&size=200`;
              }}
            />
          </div>
          <div>
            <h3 className='text-white font-bold text-[18px]'>{name}</h3>
            <p className='text-secondary text-[14px]'>{designation}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const testimonials = [
    {
      testimonial: 
        "O Rodaí é fundamental na minha rotina de estudos. As análises impactam diretamente minhas decisões in game, me permitindo focar no grind e ter mais tempo com minha família.",
      name: "Luís H. Maciel",
      designation: "Jogador Profissional e Sócio CL Team",
      image: luish,
    },
    {
      testimonial: 
        "O ponto mais forte da relação com o Rodaí é a credibilidade. As análises são confiáveis, como se fossem rodadas por mim mesmo. Hoje é uma extensão essencial do meu jogo.",
      name: "Matheus Tomé",
      designation: "Jogador Profisisonal e Instrutor SImba Poker Team",
      image: mateustome,
    },
    {
      testimonial: 
        "Poker é uma corrida contra o tempo, e o Rodaí me ajuda muito nisso. Soluções rápidas e precisas para dúvidas in game. Confiança e velocidade nos resultados dos spots!",
      name: "Carlos Ribeiro",
      designation: "Jogador profissional e sócio CL Team",
      image: carlosribeiro,
    },
    {
      testimonial: 
        "Utilizo o Rodaí há dois anos e a qualidade do serviço é excepcional. A equipe é sempre solícita e me permite rodar muito mais mãos por mês, otimizando meu tempo de estudo.",
      name: "Heitor Camargos",
      designation: "Jogador profissional no CL Poker Team",
      image: heitorcamargos,
    },
    {
      testimonial: 
        "O Rodaí economiza um tempo precioso nos meus estudos. Agora posso focar em outros aspectos enquanto aguardo os resultados, sem deixar o PC inoperante. Serviço excelente!",
      name: "Matheus Cunha",
      designation: "Jogador profissional de poker",
      image: matheuscunha,
    }
  ];

  return (
    <div className="relative mt-12 bg-tertiary/20 py-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -inset-10 bg-[#6E56E3]/5 blur-3xl rounded-full opacity-30" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>O que falam de nós</p>
          <h2 className={styles.sectionHeadText}>
            Jogadores de poker revelam o impacto real do Rodaí em suas decisões.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
