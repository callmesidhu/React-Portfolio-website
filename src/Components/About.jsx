import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const aboutContent = `I’m S Sidharth (CallMeSidhu), a passionate full-stack developer with expertise in React, Next.js, Vue.js, Flask, Node.js, Django, Figma, MongoDB, PostgreSQL, etc. 
I specialize in building modern, scalable web and mobile applications, constantly exploring new technologies to enhance performance and user experience.
<br><br/> Currently, I’m diving deep into Data Structures and Algorithms (DSA), Machine Learning technologies, and Data Analysis, aiming to expand my knowledge in artificial intelligence and predictive analytics. My goal is to bridge the gap between software engineering and intelligent systems, leveraging data to drive innovation. 
I love tackling complex tech challenges and turning ideas into reality. <br><br/>
I am currently pursuing Engineering at College of Engineering Trivandrum (CET) and have completed my Higher Secondary Education in Computer Science from Gov. HSS Punalur in 2022.
`;

const aboutMore = `loading...`;

export default function About() {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);  // Trigger animation when the section is in view
        }
      },
      { threshold: 0.5 }  // Trigger when 50% of the section is in view
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      id="about"
      className="flex justify-center items-center min-h-screen bg-black text-white p-6 sm:p-12 lg:p-28"
    >
      <motion.div
        className="rounded-lg w-[60rem] min-h-[30rem] h-auto shadow-lg border border-violet-900 bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between items-center h-10 px-4 border-b border-gray-600">
          <div className="flex space-x-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-red-700"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-yellow-700"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-green-700"></span>
          </div>
          <div className="text-sm font-semibold">root@XyphX-OS:~/callmesidhu</div>
          <div className="w-14"></div>
        </div>
        <div className="p-4 text-sm font-mono">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="w-2 h-2 bg-green-500 clip-path-triangle"></span>
            <span className="text-cyan-400">XyphX-OS</span>
            <span className="text-blue-400">git:</span>
            <span className="text-blue-400">(</span>
            <span className="text-red-400">master</span>
            <span className="text-blue-400">)</span>
            <span className="ml-2">git log</span>
          </motion.div>

          <motion.div
            className="mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="text-red-400">e23h217</span>
            <span> - (</span>
            <span className="text-yellow-400">HEAD - master, origin/master</span>
            <span>) Vercel Deployment Bug Fixed</span>
          </motion.div>

          <motion.div
            className="mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <span className="text-red-400">g43e341</span>
            <span> - Addded Skills Section </span>
            <span className="text-green-400 ml-2">(4 weeks ago)</span>
            <span className="text-blue-400"> &lt;cwattrus&gt;</span>
          </motion.div>

          <motion.div
            className="flex items-center mt-2 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <span className="w-2 h-2 bg-green-500 clip-path-triangle"></span>
            <span className="text-cyan-400">XyphX-OS</span>
            <span className="text-blue-400">git:</span>
            <span className="text-blue-400">(</span>
            <span className="text-red-400">master</span>
            <span className="text-blue-400">)</span>
            <span className="ml-2">callmesidhu -la</span>
          </motion.div>

          <div className="px-6">
            <p dangerouslySetInnerHTML={{ __html: aboutContent }} />
          </div>

          <motion.div
            className="flex items-center mt-2 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <span className="w-2 h-2 bg-green-500 clip-path-triangle"></span>
            <span className="text-cyan-400">XyphX-OS</span>
            <span className="text-blue-400">git:</span>
            <span className="text-blue-400">(</span>
            <span className="text-red-400">master</span>
            <span className="text-blue-400">)</span>
            <span className="ml-2">callmesidhu -la --all</span>
            <span className="w-1 h-4 bg-purple-500 animate-pulse"></span>
          </motion.div>

          <div className="px-6">
            <p dangerouslySetInnerHTML={{ __html: aboutMore }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
