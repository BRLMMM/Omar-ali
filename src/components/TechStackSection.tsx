'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaWordpress, FaLaravel, FaReact, FaPython, FaAngular, FaNodeJs, FaMicrosoft } from 'react-icons/fa';
import { SiMysql, SiVuedotjs, SiShopify } from 'react-icons/si';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

const techColumns = [
  {
    title: "SINGLE",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "WordPress", icon: FaWordpress },
      { name: "Shopify", icon: SiShopify }
    ]
  },
  {
    title: "MIDDLE",
    items: [
      { name: "Laravel", icon: FaLaravel },
      { name: "MySQL", icon: SiMysql },
      { name: "Vue", icon: SiVuedotjs },
      { name: "PHP", icon: FaLaravel } // using laravel icon as a proxy, or text fallback
    ]
  },
  {
    title: "ENTERPRISE",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Azure", icon: FaMicrosoft },
      { name: "Python", icon: FaPython },
      { name: "Angular", icon: FaAngular },
      { name: "Node.js", icon: FaNodeJs }
    ]
  }
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tech"
      ref={ref}
      className="relative py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-[100rem] mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-24"
    >
      {/* Left Panel: Heading & Call to action */}
      <div className="w-full lg:w-1/3 flex flex-col justify-between">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-black text-white uppercase leading-[0.85]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          OUR<br />TECHNOLOGIES
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "0px" }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mt-16 lg:mt-auto flex flex-col gap-8 items-start"
        >
          <p className="text-zinc-400 text-lg md:text-xl max-w-sm leading-relaxed">
            A personalized approach to every project — for the best results.
          </p>
          
          <motion.a 
            href="#projects"
            className="group flex items-center gap-4 bg-[#CCFF00] text-black px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#CCFF00] shadow-[5px_5px_0_0_#FFFFFF] hover:shadow-[0px_0px_0_0_#FFFFFF] hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-200 font-mono font-black text-xs md:text-sm tracking-[0.2em] uppercase"
          >
            <span>MORE TECHNOLOGIES</span>
            <div className="w-[2px] h-4 bg-black opacity-50" />
            <motion.span 
              className="flex items-center justify-center text-xl group-hover:rotate-45 transition-transform duration-300"
            >
              <FiArrowUpRight />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Right Panel: 3 Columns Tech Grid */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {techColumns.map((col, colIndex) => (
          <motion.div 
            key={colIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col w-full"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80 mb-2 group">
              <h3 className="text-xl md:text-2xl font-light tracking-wide text-white uppercase group-hover:text-[#CCFF00] transition-colors duration-300">
                {col.title}
              </h3>
              <motion.span 
                className="text-zinc-500 text-2xl font-light cursor-pointer group-hover:text-[#CCFF00] group-hover:rotate-45 transition-all duration-300"
              >
                <FiArrowDownRight />
              </motion.span>
            </div>

            {/* Column Items */}
            <div className="flex flex-col w-full">
              {col.items.map((tech, itemIndex) => {
                const Icon = tech.icon;
                return (
                  <motion.div 
                    key={itemIndex}
                    whileHover={{ x: 10, backgroundColor: "rgba(204, 255, 0, 0.05)" }}
                    className="group flex items-center gap-6 py-5 border-b border-zinc-800/80 cursor-pointer px-4 -mx-4 rounded-lg transition-colors duration-300"
                  >
                    <div className="text-zinc-500 group-hover:text-[#CCFF00] text-2xl transition-all duration-300 transform group-hover:scale-110">
                      <Icon />
                    </div>
                    <span className="text-zinc-300 font-medium text-base md:text-lg tracking-wide group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}