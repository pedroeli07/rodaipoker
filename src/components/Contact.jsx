import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    situation: "",
  });
  const [handImage, setHandImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHandImage(file);
      
      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateFeedback = () => {
    // Simulação de feedback
    const randomPercentage = Math.floor(Math.random() * 40) + 60; // 60-100%
    const isGoodPlay = randomPercentage > 80;
    
    const feedbackOptions = [
      {
        title: "Análise da Rodai Poker",
        accuracy: randomPercentage,
        evaluation: isGoodPlay ? "Excelente jogada!" : "Jogada subótima",
        explanation: isGoodPlay 
          ? "Sua decisão está alinhada com a estratégia GTO. Considerando sua posição na mesa e o tamanho do pot, esta foi uma ação de alta expectativa (EV+)."
          : "Sua decisão pode ser melhorada. Com base na sua posição e nas odds do pot, existe uma alternativa com maior expectativa de valor.",
        recommendation: isGoodPlay
          ? "Continue com esta linha de jogo em situações semelhantes."
          : "Em situações futuras similares, considere uma abordagem diferente para maximizar o valor esperado.",
        evImpact: isGoodPlay ? `+${(Math.random() * 5).toFixed(2)} BBs` : `-${(Math.random() * 3).toFixed(2)} BBs`
      }
    ];
    
    return feedbackOptions[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!handImage) {
      alert("Por favor, faça upload de uma imagem da sua mão de poker.");
      return;
    }
    
    setLoading(true);
    
    // Simular tempo de processamento
    setTimeout(() => {
      const generatedFeedback = generateFeedback();
      setFeedback(generatedFeedback);
      setShowFeedback(true);
      setLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setShowFeedback(false);
    setForm({
      ...form,
      situation: "",
    });
    setHandImage(null);
    setPreviewImage(null);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Teste nossa análise</p>
        <h3 className={styles.sectionHeadText}>Envie sua mão.</h3>

        {!showFeedback ? (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Nome</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Qual é o seu nome?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-purple-700/20'
                  required
                />
              </label>
              
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Seu email</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Qual é o seu email?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-purple-700/20'
                  required
                />
              </label>
            </div>

            <div className="bg-tertiary/30 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-white text-xl font-bold mb-6">Upload da mão de poker</h4>
              
              <div className="mb-6">
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Faça upload do screenshot da sua mão</span>
                  <div 
                    className="border-2 border-dashed hover:bg-purple-700/20 border-purple-500/50 rounded-lg p-8 cursor-pointer transition-colors duration-200"
                    onClick={() => document.getElementById('handImageUpload').click()}
                  >
                    <input
                      id="handImageUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    
                    {previewImage ? (
                      <div className="flex flex-col items-center">
                        <img 
                          src={previewImage} 
                          alt="Preview da mão de poker" 
                          className="max-h-60 max-w-full rounded-lg shadow-md mb-4"
                        />
                        <p className="text-white text-sm">Clique para trocar a imagem</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-lg font-medium">Clique para fazer upload</p>
                        <p className="text-sm text-gray-400 mt-1">PNG, JPG, JPEG (máx. 10MB)</p>
                      </div>
                    )}
                  </div>
                </label>
              </div>
              
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Descrição da situação (opcional)</span>
                <textarea
                  rows={4}
                  name='situation'
                  value={form.situation}
                  onChange={handleChange}
                  placeholder='Descreva a situação da mão com mais detalhes... (stack, posição, ação tomada, etc)'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-purple-700/20'
                />
              </label>
            </div>

            <button
              type='submit'
              className='bg-[#3a2b83] hover:bg-[#5841c2] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-colors duration-200'
            >
              {loading ? "Analisando..." : "Analisar mão"}
            </button>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-tertiary/20 p-8 rounded-xl backdrop-blur-md"
          >
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <h4 className="text-white text-2xl font-bold">{feedback.title}</h4>
              <div className={`text-xl font-bold px-4 py-2 rounded-lg ${feedback.accuracy > 80 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {feedback.accuracy}% Precisão
              </div>
            </div>
            
            {previewImage && (
              <div className="mb-8">
                <h5 className="text-white text-xl font-bold mb-4">Mão analisada</h5>
                <div className="bg-white/5 p-3 rounded-lg">
                  <img 
                    src={previewImage} 
                    alt="Mão de poker analisada" 
                    className="max-h-60 rounded-lg shadow-md"
                  />
                </div>
              </div>
            )}
            
            <div className="mb-8">
              <h5 className="text-white text-xl font-bold mb-4">Avaliação</h5>
              <div className={`inline-block px-4 py-2 rounded-lg mb-4 ${feedback.evaluation.includes("Excelente") ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {feedback.evaluation}
              </div>
              <p className="text-white/90 mb-4">{feedback.explanation}</p>
              <p className="text-white/90">{feedback.recommendation}</p>
            </div>
            
            <div className="mb-6">
              <h5 className="text-white text-xl font-bold mb-4">Impacto na EV</h5>
              <div className={`inline-block px-4 py-2 rounded-lg ${feedback.evImpact.includes('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {feedback.evImpact}
              </div>
            </div>
            
            {form.situation && (
              <div className="mb-6">
                <h5 className="text-white text-xl font-bold mb-4">Sua descrição</h5>
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="text-white/90">{form.situation}</p>
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center flex-wrap gap-4">
              <button
                onClick={handleReset}
                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-tertiary/80 transition-colors duration-200'
              >
                Analisar outra mão
              </button>
              
              <button
                onClick={() => setShowFeedback(false)}
                className='bg-[#3a2b83] hover:bg-[#5841c2] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-colors duration-200'
              >
                Editar esta mão
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
