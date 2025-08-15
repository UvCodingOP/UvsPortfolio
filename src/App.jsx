import React, { useState , useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import { Menu, X, Github, Linkedin, Mail, Code, Palette, Zap, Users } from 'lucide-react';
import Card from './components/Card';
import Techstack from './components/Techstack';
import ReactL from './components/ReactL';
import Contact from './components/Contact';
// import Shery from 'sheryjs';
// import vertexShader from './vertex.glsl';
// import fragmentShader from './fragment.glsl'

// Temporarily disable SheryJS to avoid issues
// We'll add it back once properly configured

const email = "uvcodingop5@gmail.com";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   // Initialize SheryJS after component mounts
  //   const initShery = async () => {
  //     try {
  //       const Shery = await import('sheryjs');
  //       Shery.mouseFollower();
  //     } catch (error) {
  //       console.warn('SheryJS failed to load:', error);
  //     }
  //   };
  //   initShery();
  // }, []);

  return (
    <div id="main">

      <nav className="fixed top-0 bg-[#121212] left-0 flex w-full z-10 items-center p-4">
        <h1 className="text-xl sm:text-2xl ml-2 sm:ml-4 mt-2">UvsPortfolio</h1>


        <div className="hidden sm:flex text-lg lg:text-xl items-center mt-2 gap-6 lg:gap-10 ml-auto mr-4 lg:mr-10" id="navr">
          {["Home", "About Me", "Projects", "Contact"].map((item, idx) => (
            <h4
              key={idx}
              className="relative after:absolute after:w-full after:content-[''] after:origin-center after:scale-x-0 hover:after:scale-x-100 after:bg-cyan-400 after:h-[2px] after:left-0 after:bottom-[-4px] hover:-translate-y-1 transition-transform duration-300 ease-in-out after:transition-transform after:duration-300"
            >
              <a href={`#page${idx + 1}`}>{item}</a>
            </h4>
          ))}
        </div>


        <div className="sm:hidden ml-auto mr-2">
          <Menu
            className="cursor-pointer"
            size={24}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>


        {menuOpen && (
          <div className="sm:hidden absolute top-16 right-2 bg-[#121212] p-4 rounded shadow-md flex flex-col gap-4 min-w-[200px]">
            {["Home", "About Me", "Projects", "Contact"].map((item, idx) => (
              <a
                key={idx}
                href={`#page${idx + 1}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 text-lg"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="h-screen" id="page1">
        <div className="page1Content relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight sm:leading-[2]">
            Hi, I'm{" "}
            <span className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              UvCodingOP
            </span>
          </h1>
          <p className="leading-relaxed text-lg sm:text-xl lg:text-2xl text-gray-500 mt-4 sm:mt-6 max-w-4xl">
            Frontend Developer & UI /UX Designer crafting exceptional digital <br className="hidden sm:block" /> experiences with modern technologies and creative solutions.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              className="hover:-translate-y-2 duration-300 ease-in-out text-lg sm:text-xl relative px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-400 font-medium inline-flex items-center justify-center gap-2"
              href="#"
            >
              View My Work
            </a>
            <a
              className="hover:-translate-y-2 duration-300 ease-in-out text-lg sm:text-xl border relative px-4 sm:px-6 py-3 sm:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2"
              href="#"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-4 sm:gap-6 text-xl sm:text-2xl justify-center mt-16 sm:mt-20">
            <a target="_blank" href="https://github.com/UvCodingOP" className="hover:text-cyan-400 transition-colors">
              <Github />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/uvcodingop-undefined-290382377/" className="hover:text-cyan-400 transition-colors">
              <Linkedin />
            </a>
            <a target="_blank" href={`mailto:${email}`} className="hover:text-cyan-400 transition-colors">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen page2 px-4 sm:px-8 lg:px-20 py-16 sm:py-20" id="page2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">
          <div>
            <h1 className="text-xl sm:text-2xl text-center sm:text-left">Creating digital experiences that inspire and engage.</h1>
            <p className="text-lg sm:text-xl text-gray-400 mt-4 sm:mt-5 text-center sm:text-left max-w-4xl">
              With over 4 Months of experience in Frontend development, I specialize in <br className="hidden lg:block" /> building scalable web applications and beautiful user interfaces. I'm <br className="hidden lg:block" /> passionate about clean code, user experience, and learning <br className="hidden lg:block" /> the latest technologies.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mt-6 sm:mt-7 text-center sm:text-left max-w-4xl">
              When I'm not coding, you'll find me exploring new design and trends, <br className="hidden lg:block" /> currently contributing to CraftRack and sharing what I learn with fellow <br className="hidden lg:block" /> developers from YouTube.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0 mt-12 sm:mt-10">
              <Card description="Maintainable & scalable" title="Clean Code" icon={<Code className="text-blue-400" size={25} />} />
              <Card description="Optimized & fast" title="Performance" icon={<Zap className="text-green-400" size={25} />} />
              <Card description="User-centered approach" title="UI/UX Design" icon={<Palette className="text-pink-400" size={25} />} />
              <Card description="Team player" title="Collaboration" icon={<Users className="text-orange-400" size={25} />} />
            </div>
          </div>

          <div className="bg-[#121212] p-4 sm:p-6 rounded-xl shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] flex flex-col gap-6">
            <Techstack skill="CSS" level={50} color="bg-gradient-to-r from-blue-400 to-cyan-500" />
            <Techstack skill="Tailwind" level={80} color="bg-gradient-to-r from-purple-400 to-pink-500" />
            <Techstack skill="JavaScript" level={70} color="bg-gradient-to-r from-yellow-400 to-orange-500" />
            <Techstack skill="React" level={50} color="bg-gradient-to-r from-cyan-400 to-blue-500" />
            <ReactL />
          </div>
        </div>
      </div>


      <div className="min-h-screen w-full" id="page3"></div>


      <div className="min-h-screen w-full text-center flex items-center justify-center px-4 sm:px-8 py-16" id="page4">
        <Contact />
      </div>
    </div>
  );
};

export default App;
