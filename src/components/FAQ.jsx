import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// 3D Question Mark Component
const QuestionMark = () => {
  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial color="#6E56E3" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full"
    >
      <div
        onClick={onToggle}
        className={`
          cursor-pointer bg-tertiary/40 backdrop-blur-sm rounded-2xl p-6 
          border border-purple-500/20 hover:border-purple-500/50 
          transition-all duration-300 shadow-xl
          ${isOpen ? 'bg-opacity-90' : 'bg-opacity-60'}
        `}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-white text-[18px] font-bold flex-grow pr-4">
            {question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 flex items-center justify-center bg-[#6E56E3] rounded-full"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-secondary text-[16px] mt-4 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "O que é a Rodaí?",
      answer: "A Rodaí foi criada para facilitar o estudo técnico no poker. Combinando anos de experiência em rodagem de mãos e conhecimento avançado nos melhores solvers, oferecemos soluções precisas para jogadores que querem evoluir com confiança."
    },
    {
      question: "O que é o Rodaí Sims?",
      answer: "O Rodaí Sims é um serviço premium onde os jogadores podem enviar suas próprias mãos para serem analisadas por especialistas, recebendo soluções detalhadas e adaptadas às dinâmicas reais do jogo."
    },
    {
      question: "O que é o Rodai Acervo?",
      answer: "O Rodaí Acervo será lançado em breve e consiste em uma biblioteca de soluções já prontas, com simulações organizadas por categoria. Ele permite que jogadores acessem rapidamente respostas para spots específicos sem precisar rodar cálculos ou navegar por árvores complexas."
    },
    {
      question: "Qual a diferença entre os produtos Rodaí?",
      answer: "Rodaí Sims: Os jogadores enviam suas dúvidas e recebem soluções personalizadas.\nRodaí Acervo: Uma base de dados com soluções pré-analisadas de spots reais, prontas para consulta imediata."
    },
    {
      question: "Como faço para enviar minhas dúvidas?",
      answer: "As dúvidas devem ser enviadas diretamente pelo Discord da Rodaí, seguindo as instruções de envio disponíveis na plataforma."
    },
    {
      question: "Existem condições especiais para times?",
      answer: "Sim! Times de poker podem ter condições especiais, como planos diferenciados e acesso premium a conteúdos exclusivos. Entre em contato para saber mais."
    },
    {
      question: "O Rodaí serve para jogadores recreativos e profissionais?",
      answer: "Sim! O Rodaí é útil tanto para recreativos que querem evoluir rapidamente quanto para profissionais que precisam de soluções precisas e estratégicas."
    },
    {
      question: "Quanto tempo leva para receber as respostas no Rodaí Sims?",
      answer: "O tempo de resposta varia conforme o contrato, mas geralmente as análises são entregues dentro de 24 a 48 horas."
    },
    {
      question: "Como é garantida a confiabilidade das soluções?",
      answer: "As soluções são geradas por especialistas experientes, utilizando softwares de ponta e considerando cenários reais de jogo, garantindo alta precisão e aplicabilidade."
    }
  ];

  return (
    <div className="relative mt-12 overflow-hidden">
      {/* Background Canvas with 3D elements */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <QuestionMark />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Dúvidas? Temos as respostas para você</p>
          <h2 className={styles.sectionHeadText}>Perguntas Frequentes</h2>
        </motion.div>

        <div className="mt-16 flex flex-col gap-4 max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background glow effect */}
      <div className="absolute -inset-10 bg-[#6E56E3]/5 blur-3xl rounded-full opacity-30 z-0" />
    </div>
  );
};

export default SectionWrapper(FAQ, "faq");
