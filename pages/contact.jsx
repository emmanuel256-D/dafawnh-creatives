import { useState } from "react";

function Contact(){
    const contacts =[
    {
        name:"WhatsApp",
        text:'Text or Call Via WhatsApp',
        link:'https://wa.me/254745226115',
        icon:'images/whatsapp.jpg',
    },
    {
        name:"Instagram",
        text:'See my creatives works',
        link:'https://www.instagram.com/emmanuel_kangogo',
        icon:'images/facebook.jpg',
    },  
    {
        name:"Phone call",
        text:'Lets Discuss Your idea',
        link:'tel:+254745226115',
        icon:'images/call.jpg',
    },  
    {
        name:"Email",
        text:'You can share your project enquiry',
        link:'mailto:emmanuelkangogo71@gmail.com',
        icon:'images/gmail.png',
    },              
    ]
    return(
          <section className="py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Get in touch</p>
            <h1 className="mt-4 max-w-3xl text-4xl text-4xl font-bold leading-tight sm:text-1xl">Have an idea or Thought ?
            <span className="block text-cyan-400 mt-6">Let it out.</span>
            </h1>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">Just Reach out to me and we build it Web Application,Proffessional sites,E-commerce,Portfolio</p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {contacts.map((contact)=>(
                    <a key={contact.name} href={contact.link}
                    target={
                        contact.name === "WhatsApp" || contact.name === "Instagram" ? '_blank' : undefined
                    }
                    rel={
                        contact.name === "WhatsApp" || contact.name === "Instagram" ? 'noreferrer' : undefined
                    }
                    className="group flex items-center gap-4 rounded-2xl border-white/10 bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-800"
>                 
                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <img 
                    src={contact.icon} alt="" className="h-8 w-8 object-contain"
                  />
                 
                 </div>
                 <div>
                    <h2 className="font-bold transition-colors group-hover:text-cyan-400">{contact.name}</h2>
                     <p className="mt-1 text-sm leading-6 text-slate-400">{contact.text}</p>
                 </div>
                 <span className="ml-auto text-xl text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400">⏩</span>
                </a> 
               ))}

            </div>
            
          </section>
    );
}
export default Contact