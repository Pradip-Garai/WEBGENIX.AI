import React, { useState } from 'react'
import {motion} from 'motion/react'
import LoginModel from '../components/LoginModel';

function Home() {

  const highlights = [
  {
    title: "AI-Powered Generation",
    desc: "Convert your vision into fully functional code. Our advanced AI understands your requirements and generates clean, optimized, production-grade code instantly."
  },
  {
    title: "Responsive & Adaptive",
    desc: "Every project automatically adapts to mobile, tablet, and desktop screens. Built-in responsive design ensures pixel-perfect layouts on any device."
  },
  {
    title: "Deploy in Minutes",
    desc: "Skip months of development. Get complete, tested, and optimized websites ready for immediate deployment with integrated best practices."
  }
  ]

  const features = [
    "Modern, interactive UI components",
    "SEO-optimized structure",
    "Fast performance & animations",
    "Database integration ready",
    "API integrations included",
    "Authentication systems built-in"
  ]

  const steps = [
    { number: "01", title: "Describe", desc: "Tell us what you envision for your website" },
    { number: "02", title: "Generate", desc: "AI creates your complete website code" },
    { number: "03", title: "Deploy", desc: "Launch your site instantly to production" }
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
          Build Stuning Websites<br/>
          <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">With AI</span>
        </motion.h1>

        <motion.p
         initial={{y:20,opacity:0}}
         animate={{y:0,opacity:1}}
         className='mt-8 max-w-2xl mx-auto text-zinc-400 text-lg'
        >
          From idea to deployment in minutes. WebGenix AI generates complete, production-ready websites with stunning design, responsive layouts, and all the features you need—without writing a single line of code.
        </motion.p>

        <button onClick={()=>setOpenLogin(true)} className='px-10 py-4 mt-12 rounded-xl bg-white text-black font-semibold hover:scale-105 transition'>
          Create Your Website
        </button>
        
      </section>

      {/*  Card Section*/}
       <section className='max-w-7xl mx-auto  px-6 pb-32'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
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

      {/* How It Works Section */}
      <section className='max-w-7xl mx-auto px-6 pb-32'>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='text-4xl font-bold text-center mb-20'
        >
          How It Works
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {steps.map((step, index) => (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              key={index}
              className='text-center'
            >
              <div className='text-6xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4'>
                {step.number}
              </div>
              <h3 className='text-xl font-semibold mb-3'>{step.title}</h3>
              <p className='text-zinc-400'>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className='max-w-7xl mx-auto px-6 pb-32'>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='text-4xl font-bold text-center mb-20'
        >
          Built-in Features
        </motion.h2>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='relative rounded-2xl p-px bg-linear-to-r from-purple-500/20 via-blue-500/20 to-cyan-400/20'
        >
          <div className='rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className='flex items-center gap-3'
                >
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400'></div>
                  <span className='text-zinc-300'>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className='max-w-4xl mx-auto px-6 pb-32 text-center'>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='rounded-2xl p-12 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-cyan-400/10 border border-purple-500/20'
        >
          <h2 className='text-4xl font-bold mb-4'>Ready to Build?</h2>
          <p className='text-zinc-400 text-lg mb-8'>
            Transform your ideas into reality. Start building your AI-powered website today.
          </p>
          <button onClick={()=>setOpenLogin(true)} className='px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition'>
            Get Started Free
          </button>
        </motion.div>
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
