import React, { useState } from 'react'
import {motion} from 'motion/react'
import LoginModel from '../components/LoginModel';

function Home() {

  const highlights = [
  {
    title: "AI Generated Code",
    desc: "WebGenix.AI generates clean, structured, and production-ready code instantly based on your idea, saving hours of manual work."
  },
  {
    title: "Fully Responsive Layouts",
    desc: "Every website is automatically optimized for all devices, ensuring a smooth and consistent experience across mobile, tablet, and desktop."
  },
  {
    title: "Production Ready Output",
    desc: "Get scalable, high-performance websites with modern design, animations, and best practices—ready to deploy instantly."
  }
  ]

  const [openLogin, setOpenLogin] = useState(false);


  return (
    <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>

      {/* Header Section */}
      <motion.div
       initial={{y:-40,opacity:0}}
       animate={{y:0,opacity:1}}
       transition={{duration:0.5}}
       className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5'
      > 

      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div>
            <img src="./Webgenix.png" alt="WebGenix Logo" className='h-8 w-35'/>
          </div>

          <div className='flex items-center gap-5'>
            <div className='hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer'>
              Pricing
            </div>
            <button onClick={()=>setOpenLogin(true)} className='px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-black text-sm'>
              Get Started
            </button>
          </div>
      </div>


      </motion.div>

      {/* Hero Section */}
      <section className='pt-44 pb-32 px-6 text-center'>
        <motion.h1
         initial={{y:40,opacity:0}}
         animate={{y:0,opacity:1}}
         className='text-5xl md:text-7xl font-bold tracking-tight'
        >
          Build Stunning Websites<br/>
          <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">With AI</span>
        </motion.h1>

        <motion.p
         initial={{y:20,opacity:0}}
         animate={{y:0,opacity:1}}
         className='mt-8 max-w-xl mx-auto text-zinc-400 text-lg'
        >
          Describe your idea and let AI generate a modern,
          responsive, production-ready website
        </motion.p>

        <button onClick={()=>setOpenLogin(true)} className='px-10 py-4 mt-12 rounded-xl bg-white text-black font-semibold hover:scale-105 transition'>
          Get Started
        </button>
        
      </section>

      {/*  Card Section*/}
       <section className='max-w-7xl mx-auto  px-6 pb-32'>
  <      div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {highlights.map((item, index) => (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              key={index}
              className="group relative rounded-2xl p-px bg-linear-to-r from-purple-500/20 via-blue-500/20 to-cyan-400/20 hover:from-purple-500/50 hover:to-cyan-400/50 transition"
            >
              {/* Inner Card */}
              <div className="rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl p-8 h-full transition duration-300 group-hover:scale-[1.03]">

                <h1 className="text-xl font-semibold mb-3 group-hover:text-white transition">
                  {item.title}
                </h1>

                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/10 py-10 text-center text-sm text-zinc-500'>
        &copy; {new Date().getFullYear()} WebGenix.ai
      </footer>
      {openLogin && <LoginModel open={openLogin} onClose={()=> setOpenLogin(false)} />}

    </div>
  )
}

export default Home
