import React from 'react'
import {AnimatePresence, motion} from 'motion/react'
import { Link } from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import axios from 'axios'
import { serverUrl } from '../App';

function LoginModel({open,onClose}) {

  const handleGoogleAuth = async()=>{
    try{

      const result = await signInWithPopup(auth,provider);
      const {data} = await axios.post(`${serverUrl}/auth/google-authentication`,{
        name:result.user.displayName,
        email:result.user.email,
        avatar:result.user.photoURL
      },{withCredentials:true})

      console.log(data);

    }catch(err){
      console.log(err);
    }
  }
  return (<AnimatePresence>
    {open && 
        <motion.div 
         className='fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4'
         initial={{opacity:0}}
         animate={{opacity:1}}
         exit={{opacity:0}}
         onClick={onClose}
        >
          
           <motion.div
             initial={{scale:0.88,opacity:0,y:60}}
             animate={{scale:1,opacity:1,y:0}}
             exit={{scale:0.9,opacity:0,y:40}}
             transition={{duration:0.45,ease:"easeOut"}}
             className='relative w-full max-w-md p-1 rounded-3xl bg-linear-to-br from-purple-500/40 via-blue-500/30 to-transparent'
             onClick={(e)=> e.stopPropagation()}
           >
             <div className='relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.8)] overflow-hidden'>
                <motion.div 
                  animate={{opacity:[0.25,0.4,0.25]}}
                  transition={{duration:6,repeat:Infinity}}
                  className='absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]'
                />
                <motion.div 
                  animate={{opacity:[0.2,0.35,0.2]}}
                  transition={{duration:6,repeat:Infinity,delay:2}}
                  className='absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/25 blur-[140px]'
                />

                <button onClick={onClose} className=' cursor-pointer absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg'>
                    &#10006;
                </button>

                <div className='relative px-8 pt-14 pb-10 text-center'>
                    <h1 className='inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300'> AI Powered Website Builder </h1>
                    <h2 className='text-3xl font-semibold leading-tight mb-3 space-x-2'>
                        <span>Welcome to</span>
                        <span className='bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>WebGenix.ai</span>
                    </h2>

                    <motion.button
                      whileHover={{scale:1.04}}
                      whileTap={{scale:0.96}}
                      onClick={handleGoogleAuth}
                      className='group relative w-full h-13 mt-2 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden'
                    >
                      <div className='relative flex items-center justify-center gap-3'>
                        <img 
                        className='h-8 w-8'
                        src="./Google_SVG.webp" alt="Google Icon" />
                        <p>Continue with Google</p>
                      </div>
                      
                    </motion.button>

                    <div className='flex items-center gap-4 my-10'>
                      <div className='h-px flex-1 bg-white/10' />

                      <span className='text-xs text-zinc-500 tracking-wide'>Secure Login</span>

                      <div className='h-px flex-1 bg-white/10' />
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed text-center">
                      By continuing, you acknowledge that you have read and agree to our{" "}
  
                      <span className="text-blue-500 hover:text-blue-400 underline underline-offset-4 cursor-pointer transition-colors duration-200 font-medium">
                      <Link to="/terms">Terms of Service</Link>
                      </span>{" "}
  
                      and{" "}
  
                      <span className="text-blue-500 hover:text-blue-400 underline underline-offset-4 cursor-pointer transition-colors duration-200 font-medium">
                       <Link to="/privacy-policy">Privacy Policy</Link>
                      </span>.
                    </p>

                </div>
             </div>
              
           </motion.div>

        </motion.div>
    }
  </AnimatePresence>
  )
}

export default LoginModel
