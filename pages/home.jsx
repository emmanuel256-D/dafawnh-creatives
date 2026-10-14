import { useState,useEffect } from "react";
import axios from 'axios';
function Home(){
    const [page,setPage]= useState(false);
    const [isDark,setIsDark] = useState('');
    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme !== null){
            setIsDark(savedTheme === 'dark');
        }
    },[]);
    useEffect(()=>{
        document.documentElement.classList.toggle('dark',isDark);

    },[isDark]);
    return(
        
        <div className="relative min-h-screen bg-slate-950 text-white">
            <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"/>
            <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"/>
            <main id='home'className="relative mx-auto grid min-h-[75vh] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
                <section className="animate-fade-in ">
                 <p className="mb-3 inline-flex items-center gap-2 rounded-full border text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 sm:text-sm">Digital Solution by Emmanuel Kangogo</p>
                 <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">I turn Ideas into {''}
                    <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                          digital experiences
                    </span>
                    
                 </h1>
                 <h1 className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg" 
                 >I build modern sites,web applications and digital platforms  that help businesses establish their presence and serve client online</h1>
                <h2 className="mt-3 ">Are you looking for ?</h2>
                
                <div className="mt-6 flex flex fex-wrap gap-2">
                    {['Clean','Fast','User-Friendly','Simple'].map((technology)=>(
                        <span key={technology}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 sm:text-sm">
                          {technology}
                        </span>
                    ))}
                   

                 </div>
                  <h2 className="mt-2 font-semibold text-green-500 ">Websites</h2>
                 <div className="mt-5 flex flex-wrap gap-4">
                    <a href='/projects'className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover-cyan-400 hover:text-cyan-300">Explore</a>
                    <a href='/contact'className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover-cyan-400 ">Lets Talk</a>
                    <a href='/contact'className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover-cyan-400 ">Request site</a>
                 </div>
                </section>
            </main>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5  w-full gap-10">
                    <div className="bg-slate-500-sky-900  rounded-xl border border-white/90 p-8 transition duration-100 hover:-translate-y-1 hover-cyan-400 hover:text-sky-300">
                        <h1 className="text-xl font-bold text-gray-500  rounded-lg ">Profile</h1>
                        
                        <p className="mt-3 text-white/50 text-[13px]">Software Engineer equiped with problem solving mindsets that plays a major role in 
                        building Responsives web pages , Web applications and e-commerce services.
                        From organizing ideas turning it into a worthy profile and reliable.
                        
                        </p>
                        <a href='/profile'className="w-full mt-2 p-28  text-bold">View</a>
                    </div>
                     <div className="bg-slate-500-sky-900  rounded-xl border border-white/90 p-8 transition duration-100 hover:-translate-y-1 hover-cyan-400 hover:text-sky-300">
                        <h1 className="text-xl font-bold text-gray-500  rounded-lg ">Experience</h1>
                
                        <p className="mt-3 text-white/50 text-[13px]">
                          Software Engineering Intern — Moonlight

Gained practical exposure to software engineering workflows and the development of digital solutions. Focused on strengthening programming, problem-solving, debugging, and software development skills while gaining experience in a professional working environment.
                        </p>

                    </div>
                     <div className="bg-slate-500-sky-500  rounded-xl border border-white/90 p-8 transition duration-100 hover:-translate-y-1 hover-cyan-400 hover:text-sky-300">
                        <h1 className="text-xl font-bold text-gray-500  rounded-lg ">Education</h1>
                        <p className="mt-3 text-white/50 text-[13px]">   
                        Computer Science

Background in Computer Science, with an interest in software development, web technologies, database management, and building practical digital solutions. Developing skills in frontend development using React and Tailwind CSS, alongside backend development with Django REST Framework.

                        </p>
                
                    </div>
                   </div>
                   
        {page &&(
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute  inset-0 bg-white/60 backdrop-blur-md">
                   <button onClick={()=>setPage(false)} className="text-red-500 text-2xl absolute top-4 right-4  hover:text-orange">X</button>
                    <div className={`min-h-screen p-8 transition-colors duration-300 ${isDark
                        ? 'bg-slate-950 text-white'
                        : 'bg-white-slate-900'
                    }`}>
                        
                        <p>current mode :{isDark ? 'Dark':'Light'}</p>
                        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
                        onClick={()=>setIsDark(!isDark)}>Change Mode</button>
                                           
                    </div>
                    
                </div>
            </div>
        )}    
        </div>
         
    );
}
export default Home