import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Importe a imagem do laptop
import acervo from "../assets/acervo.png";
import rodaiLuMat from "../assets/rodaiLuMat.png";

const StepCard = ({ step }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.8)",
        color: "#fff",
        border: "1px solid rgba(110, 86, 227, 0.3)",
        backdropFilter: "blur(10px)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(35, 38, 49, 0.8)" }}
      iconStyle={{ 
        background: "#6E56E3", 
        boxShadow: "0 0 20px rgba(110, 86, 227, 0.7)"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <span className="text-white font-bold text-xl">{step.number}</span>
        </div>
      }
    >
      <h3 className='text-white text-[24px] font-bold'>{step.title}</h3>

      <p className='text-white-100 text-[16px] mt-4 leading-relaxed'>
        {step.description}
      </p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const steps = [
    {
      number: "1",
      title: "Envie seu spot",
      description: "Você envia o spot (dúvida) pelo seu canal exclusivo do Discord. Basta mandar um print do spot que deseja analisar."
    },
    {
      number: "2",
      title: "Análise especializada",
      description: "Nossa equipe especializada roda a mão pra você utilizando os mais avançados solvers e técnicas de análise."
    },
    {
      number: "3",
      title: "Receba sua resposta",
      description: "A resposta detalhada e precisa da sua dúvida é entregue em uma única imagem diretamente no seu canal exclusivo."
    }
  ];

  return (
    <>
      {/* Grid layout for the first section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Left side - Card */}
        <div className="bg-tertiary/40 p-8 rounded-2xl backdrop-blur-sm border border-[#6E56E3]/20">
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText} mb-2`}>
              Soluções confiáveis e sob medida para o seu jogo.
            </h2>
            <p className={`${styles.heroSubText} text-white-100 mb-6`}>
              Tá no grind e ficou com dúvida em um spot?
            </p>
            <p className="text-[#6E56E3] text-2xl font-bold mb-8">
              DEIXA QUE NÓS RODAMOS A MÃO PRA VOCÊ!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center mt-8"
          >
            <a href="#contact">
              <button className="bg-[#6E56E3] hover:bg-[#5841c2] text-white font-bold py-3 px-6 rounded-lg 
                                shadow-lg transform transition-all duration-300 hover:scale-105 
                                flex items-center backdrop-blur-sm bg-opacity-80">
                <span>Solicite uma proposta personalizada</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right side - Image */}
        <div className="relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-xl"
          >
            <img 
              src={rodaiLuMat} 
              alt="Depoimentos dos jogadores" 
              className="w-full h-auto object-contain rounded-2xl"
            />
            {/* Efeito de brilho atrás da imagem */}
            <div className="absolute -inset-4 bg-[#6E56E3]/10 blur-3xl rounded-full opacity-50 -z-10" />
            
            {/* Link para os depoimentos */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-center"
            >
              <a href="#testimonials" className="text-[#6E56E3] text-xl font-bold hover:text-[#5841c2] transition-colors flex items-center justify-center">
                <span>Ver todos os depoimentos</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mb-12`}>
          Como funciona?
        </h2>
      </motion.div>

      <div className='flex flex-col'>
        <VerticalTimeline lineColor="#6E56E3">
          {steps.map((step, index) => (
            <StepCard key={`step-${index}`} step={step} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-7xl mx-auto mb-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-32">
          <div className="flex-1">
            <h2 className={`${styles.sectionHeadText} mb-8`}>
              Rodaí Acervo
            </h2>
            <p className={`${styles.heroSubText} text-white-100`}>
              Acervo com mais de 1500 soluções prontas e facilitadas para elevar o seu jogo.
            </p>
          </div>

          <div className="relative flex-1">
            <img 
              src={acervo} 
              alt="Rodai Acervo" 
              className="w-full max-w-lg mx-auto object-contain"
            />
            {/* Efeito de brilho atrás da imagem */}
            <div className="absolute -inset-10 bg-[#6E56E3]/10 blur-3xl rounded-full opacity-50 -z-10" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
