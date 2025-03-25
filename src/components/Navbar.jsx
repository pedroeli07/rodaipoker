import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { throttle } from 'lodash';
import { Canvas } from "@react-three/fiber";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { rodaiLogo, menu, close } from "../assets";

const CanvasWrapper = memo(({ children }) => (
  <Canvas
    dpr={[1, 2]}
    performance={{ min: 0.5 }}
    frameloop="demand"
  >
    {children}
  </Canvas>
));

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled 
          ? "bg-primary bg-opacity-70 backdrop-filter backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-full mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={rodaiLogo} 
            alt='Rodai' 
            className='w-32 object-contain transition-all duration-300 hover:scale-105 hover:brightness-110' 
          />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title 
                  ? "text-white font-semibold" 
                  : "text-secondary hover:text-white"
              } text-[16px] font-medium cursor-pointer transition-colors duration-200 hover:scale-105`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>



        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary bg-opacity-80 backdrop-filter backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white font-semibold" : "text-secondary"
                  } transition-colors duration-200`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
