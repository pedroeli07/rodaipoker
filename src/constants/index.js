import {
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,

  ggpoker,
  pokerstars,
  poker888logo,
  yapoker,
  wpn,
  suprema,
} from "../assets";

import {
  Brain,
  ClockArrowDown,
  Award,
  Focus,ChartSpline 
} from 'lucide-react';


export const navLinks = [
  {
    id: "about",
    title: "O que é a Rodaí?",
  },
  {
    id: "rodai-sims",
    title: "Rodaí Sims",
  },
  {
    id: "rodai-acervo",
    title: "Rodaí Acervo",
  },
  {
    id: "benefits",
    title: "Benefícios",
  },
  {
    id: "testimonials",
    title: "O que falam de nós",
  },
  {
    id: "faq",
    title: "FAQ",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Confiança nas decisões",
    subtitle: "Receba respostas detalhadas e confiáveis, prontas para serem aplicadas na mesa.",
    icon: Brain,
  },
  {
    title: "Economize tempo",
    subtitle: "Não perca horas rodando soluções sozinho. Nossa equipe faz isso por você.",
    icon: ClockArrowDown,
  },
  {
    title: "Impacto no seu jogo",
    subtitle: "Utilizamos inteligência artificial para ajudar os jogadores a tomar decisões mais informadas no poker.",
    icon: ChartSpline,
  },
  {
    title: "Expertise Comprovada",
    subtitle: "Temos especialistas em high stakes, garantindo soluções confiáveis e precisas.",
    icon: Award,
  },
  {
    title: "Foco total no jogo",
    subtitle: "Deixe a parte operacional com a gente e foque no que realmente importa: jogar melhor.",
    icon: Focus,
  },

];

const technologies = [
  {
    name: "888 Poker",
    icon: poker888logo,
  },
  {
    name: "Poker Stars",
    icon: pokerstars,
  },
  {
    name: "GG Poker",
    icon: ggpoker,
  },
  {
    name: "Ya Poker",
    icon: yapoker,
  },
  {
    name: "WPN Poker",
    icon: wpn,
  },
  {
    name: "Suprema Poker",
    icon: suprema,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Rodaí",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Março 2020 - Abril 2021",
    points: [
      "Desenvolvendo e mantendo aplicativos web usando React.js e outras tecnologias relacionadas.",
      "Colaborando com equipes de cross-funcional incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participando em revisões de código e fornecendo feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Rodaí",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Março 2020 - Abril 2021",
    points: [
      "Desenvolvendo e mantendo aplicativos web usando React.js e outras tecnologias relacionadas.",
      "Colaborando com equipes de cross-funcional incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participando em revisões de código e fornecendo feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Desenvolvedor Web",
    company_name: "Rodaí",
    icon: shopify,
    iconBg: "#383E56",
    date: "Março 2020 - Abril 2021",
    points: [
      "Desenvolvendo e mantendo aplicativos web usando React.js e outras tecnologias relacionadas.",
      "Colaborando com equipes de cross-funcional incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participando em revisões de código e fornecendo feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Desenvolvedor Full Stack",
    company_name: "Rodaí",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Março 2020 - Abril 2021",
    points: [
      "Desenvolvendo e mantendo aplicativos web usando React.js e outras tecnologias relacionadas.",
      "Colaborando com equipes de cross-funcional incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participando em revisões de código e fornecendo feedback construtivo a outros desenvolvedores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Eu pensava que era impossível criar um site tão bonito como nosso produto, mas Rodaí me provou errado.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Eu nunca conheci um desenvolvedor web que realmente se importa com o sucesso de seus clientes como Rodaí faz.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Depois que Rodaí otimizou nosso site, nosso tráfego aumentou em 50%. Não podemos agradecer o suficiente!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



export { services, technologies, experiences, testimonials };
